def solution(n, stages):
    fail_rate = []
    fail = 0 # 실패율 
    p=0 # 해당 스테이지에 도전중인 사용자의 수 
    f=0 # 해당 스테이지에서 실패한 사용자의 수 
    for i in range(1,n+1):
        for j in stages:
            #print(i,j)

            if j >= i :
                p += 1
                #print("n:",i,"p:",p)
                #print("-----------")
            else:
                pass
            if j == i:
                f += 1
                #print("j:",j,"f:",f)
                #print("-----------")
            else: 
                pass
        if p==0:
            fail_rate.append(0)
        else:    
            fail = (f/p)         
            fail_rate.append(fail)
        f = 0
        p = 0


    number = list(range(1,n+1))
    a=[]
    for x in zip(fail_rate,number):
        a.append(x)

    #print(a)

    b = sorted(a,key=lambda x:x[0],reverse=True)

    c=[]
    for i in range(len(b)):
        c.append(b[i][1])
    #print(c)
    return c