def solution(dots):
    return 1 if abs((dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1]))==abs((dots[2][0]-dots[3][0])/(dots[2][1]-dots[3][1])) else 0