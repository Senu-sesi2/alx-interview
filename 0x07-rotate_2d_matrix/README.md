# 0x07. Rotate 2D Matrix

For the “0. Rotate 2D Matrix” project, you are tasked with implementing an in-place algorithm to rotate an n x n 2D matrix by 90 degrees clockwise. This challenge requires a good understanding of matrix manipulation and in-place operations in Python. Below are the key concepts and resources that you need to grasp in order to successfully complete this project.

## Concepts Needed:
1. Matrix Representation in Python:
	* Understanding how 2D matrices are represented using lists of lists in Python.
	* Accessing and modifying elements in a 2D matrix.

2. In-place Operations:
	* Performing operations on data without creating a copy of the data structure.
	* The importance of minimizing space complexity by modifying the matrix in place.

3. Matrix Transposition:
	* Understanding the concept of transposing a matrix (swapping rows and columns).
	* Implementing matrix transposition as a step in the rotation process.

4. Reversing Rows in a Matrix:
	* Manipulating rows of a matrix by reversing their order as part of the rotation process.

5. Nested Loops:
	* Using nested loops to iterate through 2D data structures like matrices.
	* Modifying elements within nested loops to achieve the desired rotation.

## Resources:
* Python Official Documentation:
	* <https://intranet.alxswe.com/rltoken/eZc_ELGxUgkuc4kkE_fd7Q>
	* <https://intranet.alxswe.com/rltoken/0ORj179giGhGe8jpcxBkXg>
* GeeksforGeeks Articles:
	* <https://intranet.alxswe.com/rltoken/9T8w4mtiIIRDtfLSmEmrLA>
	* <https://intranet.alxswe.com/rltoken/JdIFvtej2hMW-Wd9ABHMOA>
* TutorialsPoint:
	* <https://intranet.alxswe.com/rltoken/rFmzUTpaLGqDXjGA6D9eYw> for basics of list manipulation in Python.

## Additional Resources
* <https://intranet.alxswe.com/rltoken/4GPWA9C2AJHtpdGxuIHEPA>

## Tasks
Given an `n` x `n` 2D matrix, rotate it 90 degrees clockwise.

Prototype: `def rotate_2d_matrix(matrix):`
Do not return anything. The matrix must be edited in-place.
You can assume the matrix will have 2 dimensions and will not be empty.
```
equa@cyclone$ cat main_0.py
#!/usr/bin/python3
"""
Test 0x07 - Rotate 2D Matrix
"""
rotate_2d_matrix = __import__('0-rotate_2d_matrix').rotate_2d_matrix

if __name__ == "__main__":
    matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]

    rotate_2d_matrix(matrix)
    print(matrix)

equa@cyclone$
equa@cyclone$ ./main_0.py
[[7, 4, 1],
[8, 5, 2],
[9, 6, 3]]
equa@cyclone$
```
