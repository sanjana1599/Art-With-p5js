PPMlist = []
w = 1000
h = 1000
fileName = "myPPMfile"
colorRange = 255
maxIterations = 200

infinityValue = 2

#ZOOM OUT
# leftBound = -2 
# rightBound = 1 
# topBound = 1.5 
# bottomBound = topBound + (leftBound - rightBound) * h / w 

#ZOOM IN
# leftBound = -2 
# rightBound = -0.8 
# topBound = 0.6 
# bottomBound = topBound + (leftBound - rightBound) * h / w 

#ZOOM IN MORE
# leftBound = -1.2 
# rightBound = -0.7 #-0.8 works
# topBound = 0 
# bottomBound = topBound + (leftBound - rightBound) * h / w 

#ZOOM IN EVEN MORE
leftBound = -1.3 
rightBound = -0.9 
topBound = 0 
bottomBound = topBound + (leftBound - rightBound) * h / w 


def createP3File():
	for i in range(h):
		rowList = []
		for j in range(w):
			rgbList = []
			for k in range(3):
				rgbList.append(255)
			rowList.append(rgbList)
		PPMlist.append(rowList)

	return PPMlist


def drawMandelbrot(PPMlist):
	for i in range(h):
		for j in range(w):
			a = mapFunction(j, 0, w, leftBound, rightBound)
			b = mapFunction(i, 0, h, bottomBound, topBound)

			originalA = a
			originalB = b

			n = 0

			while n < maxIterations:
				newA = a*a - b*b
				newB = 2 * a * b

				a = newA + originalA
				b = newB + originalB

				Znew = abs(a + b)

				if Znew > infinityValue:
					break 

				n += 1

			if n == maxIterations: #belongs in MB set
				colorValR = 0
				colorValG = 0
				colorValB = 0
			else: #doesn't belong in MB set
				colorVal = mapFunction(n, 0, maxIterations, 0, 255)

				colorValR = colorVal / (10 / (n*2)) 
				colorValG = colorVal / (1 / (n*2))
				colorValB = colorVal / (1 / (n*2))

			PPMlist[i][j][0] = colorValR 
			PPMlist[i][j][1] = colorValG
			PPMlist[i][j][2] = colorValB

	return PPMlist


def mapFunction(val, lower1, upper1, lower2, upper2):
	range1 = upper1 - lower1
	range2 = upper2 - lower2
	percentage = (val / range1) * 100
	mappedVal = lower2 + ((percentage / 100) * range2)

	return mappedVal


def saveP3File(PPMlist):
	title = "P3\n"
	canvas = str(w) + " " + str(h) + "\n" 
	PPMcontext = title + canvas + str(colorRange) + "\n"

	for i in range(h):
		for j in range(w):
			for k in range(3):
				PPMcontext += str(PPMlist[i][j][k]) + " "
			PPMcontext += "  "
		PPMcontext += "\n"

	#Create file
	file_obj = open("%s.ppm" % fileName, "w")
	file_obj.write(PPMcontext)
	file_obj.close()


def main():
	saveP3File(drawMandelbrot(createP3File()))

if __name__ == "__main__":
	main()