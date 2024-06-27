#!/usr/bin/python3

"""a function that returns a list of lists 
of integers representing the Pascal’s triangle
"""

def pascal_triangle(n): #function
    if n <= 0:
        return []

    triangle = [[1]]  # Initialize Pascal's triangle first row

    for x in range(1, n):
        row = [1]  # Each row starts with 1
        for y in range(1, x):
            # sum the two elements directly above it
            row.append(triangle[x-1][y-1] + triangle[x-1][y])
        row.append(1)  # each row ends with 1
        triangle.append(row)

    return triangle

# Example how it is used:
n = 5
print(pascal_triangle(n))

