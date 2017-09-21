// number 1
const sum = function (num1, num2, num3) {
    return num1 + num2 + num3;
};

const result = sum(1, 2, 3);


// number 2
const name = "Your name here"
const func = function () {
    
    return name;
};
// number 3
const iHaveRanOutOfNames = function (x, y) {
    console.log("yay");

};
iHaveRanOutOfNames(3, 4);
// number 4
const fullName = function (firstName, lastName) {
    return firstName + lastName;
};
const me=fullName("Violeta", " Iskandaryan");
//number 5
const stringFunc = function (str1, str2, str3) {
    if (str1.length > str2.length) {
        if (str1.length > str3.length) {
            return str1;
        } else if (str3.length > str1.length) {
            return (str3);
        }
    } else if (str2.length > str1.length) {
        if (str2.length > str3.length) {
            return str2;
        } else if (str3.length > str2.length) {
            return str3;
        }
    }
    if (str1.length === str2.length) {
        if (str3.length > str1.length) {
            return str3;
        } else if (str1.length > str3.length) {
            return ("no longest string");

        }
    }
    if (str2.length === str3.length) {
        if (str2.length > str1.length) {
            return ("no longest string");

        } else if (str1.length > str2.length) {
            return (str1);
        }
    } if (str1.length === str3.length) {
        if (str1.length > str2.length) {
            return ("no longest string");
        } else if (str2.length > str1.length) {
            return str2;
        }
        if (str1.length === str2.length) {
            if (str1.length === str3.length) {
                return ("no longest string");
            }
        }
    }



};
const a = stringFunc(" AUA ", " CS110 ", " We are the best  yay "); 
//number 6
const calc = function (num1, num2) {
    if (num1 === num2) {
        return (0);
    }
    if (num1 > num2) {
        return (1);
    }
    if (num2 > num1) {
        return (-1);
    }
};
calc(2, 200);
//number 7
const firstTruthy = function (input1, input2, input3) {
    return input1 || input2 || input3;
}
const reslt = firstTruthy(0, 7, 222);
