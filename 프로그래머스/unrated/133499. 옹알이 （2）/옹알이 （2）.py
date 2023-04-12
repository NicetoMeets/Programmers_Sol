def solution(babbling):
    answer = 0
    can_dict = {"aya":"!", "ye":"@", "woo":"#", "ma":"$"}
    cleaned_list = []

    for b in babbling:
        for k,v in can_dict.items():
            b = b.replace(k,v)

        cleaned_list.append(b)

        for idx in range(len(b)-1):
            if b[idx] == b[idx+1]:
                if b in cleaned_list:
                    cleaned_list.remove(b)

    for element in cleaned_list:
        for s in "!@#$":
            element = element.replace(s,"")
        if element == "":
            answer += 1

    return answer