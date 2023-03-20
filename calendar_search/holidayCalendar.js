function getDate(){

const objValue = document.querySelector("#userDate").value;
console.log(objValue);


let mydate = new Date(objValue);

// get the day and the month

let uDate = mydate.getUTCDate();
console.log(uDate);
let uMonth = mydate.getUTCMonth() + 1;
console.log(uMonth);
let uYear = mydate.getUTCFullYear();
console.log(uYear);

// set up multi arrays for sign
const months = new Array();
months[0] = ["January"];
months[1] = ["February"];
months[2] = ["March"];
months[3] = ["April"];
months[4] = ["May"];
months[5] = ["June"];
months[6] = ["July"];
months[7] = ["August"];
months[8] = ["September"];
months[9] = ["October"];
months[10] = ["November"];
months[11] = ["December"];
months[12] = ["December"];

const dates = new Array ();

// [month, day 1, day 2, year, holiday, image]
dates[0] = [9, 1, 1, 2022, "when Fall 2022 Classes Begin.","images/noholiday.jpg"];
dates[1]=[9, 5, 5, 2022, "Labor Day - no class!","images/noholiday.jpg"];
dates[2]=[9, 14, 14, 2022, "the Add/Drop Deadline.","images/noholiday.jpg"]; 
dates[3]=[10, 10, 10, 2022, "Fall Break!","images/noholiday.jpg"];
dates[4]=[10, 11, 11, 2022, "Legislative Monday - classes according to a Monday schedule.", "images/noholiday.jpg"];
dates[5]=[10, 31, 31, 2022, "not an NYU Holiday, but Happy Halloween!", "images/halloween.jpg"];
dates[6]=[11, 23, 23, 2022, "Thanksgiving Recess - no class.", "images/thanksgiving.jpg"];
dates[7]=[11, 24, 24, 2022, "Thanksgiving Recess - no class.", "images/thanksgiving.jpg"];
dates[8]=[11, 25, 25, 2022, "Thanksgiving Day - there is no class. Happy Thanksgiving!", "images/thanksgiving.jpg"];
dates[9]=[12, 5, 5, 2022, "the last day to withdraw from a course."];
dates[10]=[12, 14, 14, 2022, "Last Day of Fall Classes.","images/noholiday.jpg"];
dates[11]=[12, 16, 16, 2022,"Final Exam Period","images/noholiday.jpg"];
dates[12]= [12, 23, 24, 2022, "Winter Recess - no class.", "images/winter.jpg"];
dates[13]=[12, 25, 25, 2022, "Christmas Day!", "images/christmas.jpg"];
// winter recess from 12/23 - 1/2
dates[14]=[1, 2, 2, 2022, "Winter Recess - no class.", "images/winter.jpg"];
dates[15]=[1, 23, 23,  2022, "when Spring 2023 classes begin.","images/noholiday.jpg"];
dates[16]=[2, 20, 20, 2023, "Presidents' Day - no class."];
dates[17]=[3, 13, 13, 2023, "Spring Break - no class.", "images/spring.jpg"];
dates[18]=[3, 13, 19, 2023, "Spring Break - no class.", "images/spring.jpg"];
// spring break until 3/19
dates[19]=[5, 8, 8, 2023, "the Last day of Spring 2023 classes.","images/noholiday.jpg"];
dates[20]=[5, 22, 22, 2023, "when Summer Classes Begin","images/noholiday.jpg"];
dates[21]=[5, 29, 29, 2023, "Memorial Day - no class.","images/noholiday.jpg"];
dates[22]=[6, 19, 19, 2023, "Juneteenth - no class.","images/noholiday.jpg"];
dates[23]=[7, 4, 4, 2023, "Independence Day - no class.","images/noholiday.jpg"];
dates[24]=[8, 16, 16, 2023, "the Last Day of Summer Classes","images/noholiday.jpg"];
dates[25]=[12, 25, 31, 2022, "Winter Recess - no class.","images/winter.jpg"];
dates[26]=[1,1,1, 2023, "the New Year!","images/newyears.jpg"];
let monthName = null;

for(let j = 0; j < months.length; j++){
    if(uMonth == (j)){
        monthName = months[j-1][0];
        break;
    }
}
// get date
for (let i=0; i < dates.length; i++)
{
    if((((uMonth == dates[i][0]) && (uDate >= dates[i][1])) && (uDate <= dates[i][2])) && (uYear == dates[i][3])){
        document.querySelector("#result").innerHTML = "<p align='center'>" + monthName + " " +  uDate + ", " + uYear + " is " + dates[i][4] +  "<\p>" + "<img src=" + dates[i][5] +">";
        break;
	}else{
        document.querySelector("#result").innerHTML = "<p align='center'>" + monthName + " " +  uDate + ", " + uYear + " is not an NYU Holiday." +  "<\p>"+  "<img src='images/noholiday.jpg'>"
    }
   }

 }