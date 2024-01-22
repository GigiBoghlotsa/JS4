//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.


// function retirement(retirementage , age) {
//     let leftage = retirementage - age
//     return leftage
// }
// document.write(retirement(65 , prompt("enter your age")))

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.



// function calculator(num1 , operator , num2) {
//     if(
//       num1 === "" && num2 === "" && operator === ""){
//        document.write("error type correct things")
//        }else if(
//          operator === "+"){
//        document.write(parseInt(num1) + parseInt(num2))
//        }else if(
//          operator === "-"){
//        document.write(num1 - num2)
//        }else if(
//          operator === "*"){
//        document.write(num1 * num2)
//        }else if(
//          operator === "/"){
//        document.write(num1 / num2)
//        }else{
//        document.write("error")
//        }
//    }
//    document.write(calculator(prompt("ENTER FIRST NUMBER"),prompt("ENTER OPERATOR"),prompt("ENTER SECOND NUMBER")))

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// function checkpasswordstrength(password){
//   if (password.length == ``){
//     document.write(`fill in the password input!!`)
//   }
//   else if(password.length < 8){
//     document.write(`password must be more than 8 characters!!`)
//   }
//   else if(password.length > 16){
//     document.write(`password must be less that 16 characters!!`)
//   }
//   else{
//     document.write(`welcome`)
//   }
//   return checkpasswordstrength
// }
// checkpasswordstrength(prompt(`enter your password!!`))

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

// function flowers(flowertype){
//   let flowers = flowertype

//   switch(flowers){
//     case `vardi`:
//       document.write(`in stock`)
//       break;  
//     case `yayacho`:
//       document.write(`out of stock`)
//       break;
//       case `ia`:
//         document.write(`in stock`)
//         case ``:
//             document.write(`enter flower type`)
//               break;
//               default:
//               document.write(`not found`)
//               break;
//               }
              
//           }
//           document.write(flowers(prompt(`enter flower type`)))
    


//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

function highestnumber(a,b,c){
    if( a === `` && b ===`` && c === ``){
      console.log('დარწმუნდით რომ ყველა ჩარჩო შევსებულია!!')}
   else if( a >= b && a >= c ){
    console.log(a)
  }
  else if(b >= a && b >= c){
    console.log(b)
  }
  else{
    console.log(c)
  }
  
    return highestnumber
  }
  
  console.log(highestnumber(prompt(`შეიყვანეთ პირველი რიცხვი`) , prompt(`შეიყვანეთ მეორე რიცხვი`) , prompt(`შეიყვანეთ მესამე რიცხვი`)))