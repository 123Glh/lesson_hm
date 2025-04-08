function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let a = matrix.length;
  let b = matrix[0].length;
  let res = [];
  let left = 0;
  let right = b - 1;
  let top = 0;
  let bottom = a - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    if (top > bottom) {
      break;
    }
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (right < left) {
      break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    if (bottom < top) {
      break;

    }
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
}
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
