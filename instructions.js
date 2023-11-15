 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR

    document.getElementById("heading").innerText = "JavaScript"

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

    document.querySelector(".paragraph").textContent = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself"

    document.getElementsByClassName("paragraph")[0].textContent = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself"

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
   document.querySelector("h3").textContent = "Things I've Accomplished So Far"

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index

    document.getElementsByTagName("p")[1].textContent = "I have discovered that I can accomplish anything I put my mind to"

    document.querySelectorAll("p")[1].textContent = "I have discovered that I can accomplish anything I put my mind to"

// So far you have hints, however the hints have lessened.

// 5.1. Attach the first input to a variable

    let firstInput = document.querySelector('[data-firstMultiply]');
    
    
    // 5.2. Attach the second input to a variable
    
    let secondInput = document.querySelector('[data-secondMultiply]');


// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)

    let firstBtn = document.querySelector('[data-calculate1]');

 

// 5.4. Attach the FIRST span element to a variable(To display the information to)

    let firstSpan = document.querySelector('[data-first]');

//         P.S. for the next step make use of console.log() to keep track of where data is going  
// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.

function multiplyFunction(){
    
    firstSpan.innerText = eval (firstInput.value * secondInput.value);
        }

        multiplyFunction();
        
        
        // 5.6. Add an event listener to the button that runs the function that tyou created
        
        firstBtn.addEventListener('click', multiplyFunction)

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

        firstSpan.innerText = eval (firstInput.value * secondInput.value);

// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0'



// 6.1 Set the first modulus input to a variable 

        let firstModulus = document.querySelector('[data-firstModulus]');

// 6.2 Set the send modulud input to a variable

        let secondModulus = document.querySelector('[data-secondModulus]');

// 6.3 Set the SECOND span to a varable(will display answer)

        let secondSpan = document.querySelector('[data-second]');
        

// 6.4 Set the SECOND button to a variable(to run event listener)

        let secondBtn = document.getElementById('calculate2');

        
        // 6.5 Create a normal function to calculate the modulus of the inputs
        
        function modulusFunction() {
            secondSpan.innerText = eval (firstModulus.value % secondModulus.value);
        }
        modulusFunction();
        // 6.6 Add an event listener to the button which will run the function you created

            secondBtn.addEventListener('click', modulusFunction);
        
// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'

        document.getElementById('bubbleTea').innerText = 'White Tea';

// 7.2 Change the text of 'Green Tea' to 'Black tea'

       document.getElementsByClassName("greenTea")[0].innerText = "Black Tea";

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'

        document.querySelector('[data-icedTea]').innerText = "Herbal Tea";

// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)

        let lastName = "Williams"; 


// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)

        let parentsAge = 20;

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

        let coolCars = ['BMW', 'Bugatti','Ferrari','McLaren', 'Mercedes'];

//             Now to manipulate the arrays. ;)

// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
        
        coolCars[3] = "Lamborghini";

// 12. Use a for loop to loop through the array, and console.log every value inside of the array.

        for (let c = 0; c < coolCars.length; c++ ) {
            console.log(coolCars [c]);
        }


// 13. Reverse the array and console.log the reversed array.

        let coolCars1 = ['BMW', 'Bugatti','Ferrari','McLaren', 'Mercedes'];
        coolCars1[3] = "Lamborghini";
        coolCars.reverse()
        console.log(coolCars);

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....
// which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]

        let popCar = coolCars1.pop();
        console.log(coolCars1)

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']

        coolCars1.splice(0, 0 , popCar);
        console.log(coolCars1)

//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. 
// The variable will be called age = 18 then a=17 to check

                let someAge = 17;
                switch (true){
                        case(someAge <= 18):
                        console.log("Younger Than 18");
                        break
                default:
                        console.log("Older Than 18");
                }       

// 17. Make use of a switch statement and create a possible soultion for no.16

                let a = 19;
                switch (true){
                        case(a >= 18):
                                console.log("Older Than 18");
                                break
                        default:
                                console.log("Younger Than 18");
                }       


// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. 
// Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')


                let mathsMark = 77;
                let physicsMark = 70;
                let englishMark = 50;
                let average = (mathsMark + physicsMark + englishMark) / 3;

                switch(true){
                        case (average <= 49):
                         console.log(`You average was okay, it was ${average.toFixed(2)}%`);
                        break
                        case (average <= 69):
                         console.log(`You average was good, it was ${average.toFixed(2)}%`);
                        break
                        case (average <= 79):
                        console.log(`You did well, your average was ${average.toFixed(2)}%`);
                        break
                        default:
                        console.log(`You must work harder next time `);
                }





// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, 
// increase the variable used by 1
                

        let something = parentsAge;
        while (something <= 30){
        console.log(something)
        something++
        }


// 20. USE while or a do while loop to print out the array of Question15(coolCars).

                let result = ''
                do {
                        coolCars = coolCars1 + 1
                        result = result + coolCars1 
                }while (coolCars <= 5){
                        console.log(result);
                }

// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic

        let chair = {
                legs: 4,
                material: 'plastic'
        }

// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.

        chair.armRestBards = "none";

// 23.1.   What code will I write to view the value of the armRestBars.

        chair.armRestBards

// 23.2    What code can I use to delete the property of legs with the value of 4.

         delete chair.legs;

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description

        function electricaldevices (name, type, year, description){
                return {
                        name:name,
                        type:type,
                        year:year,
                        description:description,
                };
        }
        console.log(electricaldevices);
        let object1 = new electricaldevices('Samsung','Microwave',2020, 'Bets in da world')

// 24. Create 4 objects of your choice using a factory function and console.log() each of them

        function bread(name, brand, type, taste){
                return {
                        name:name,
                        brand:brand,
                        type:type, 
                        taste:taste,
                }
        }
        console.log(bread);
        let object2 = new bread('Round', 'Dry', 'Eatable', 'Delicious');

        function typeChairs (name, brand, materials, sensitive){
                return {
                        name:name, 
                        brand:brand, 
                        materials:materials, 
                        sensitive:sensitive,
                }
        }
        console.log(typeChairs);
        let object3 = new typeChairs('Grey', 'Samsung', 'Plastic', 'Very');

        function theGents (name, surname, age, relationship){
                return {        
                        name:name,
                        surname:surname,
                        age:age,
                        relationship:relationship,
                }
        }console.log(theGents)
        let object4 = new theGents ('Joel', 'Abrahams', 25, 'bi');

// 25. Create a constructor function to make an object of different car, types the properties should include,

//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

        function carBrand(brand, model, year, transmission, drivetrains) {
                this.brand = brand;
                this.model = model;
                this.year = year;
                this.transmission = transmission;
                this.drivetrains = drivetrains;
        } 

// 26. Create 4 objects of your own and print to the console all of the created objects.

        let car1 = new carBrand ('Toyota', 'Corolla', 2010,'Manual', 'Front-Wheel')
        let car2 = new carBrand ('Lamborghini', 'Urus', 2023,'Automatic', 'AWD')
        let car3 = new carBrand ('Honda', 'Civic Type R', 2023,'Manual', 'AWD')
        let car4 = new carBrand ('Porsche', '911 Turbo S', 2023,'Automatic', 'AWD')

        console.log(car1);
        console.log(car2);
        console.log(car3);
        console.log(car4);

// 27. After, push the 4 objects to an array called 'informationAboutCars'.

        let informationAboutCars = ['car1', 'car2', 'car3', 'car4'];

// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, 
// eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'

        function globalFunction(carBrand){
                
         return `The car brand ${carBrand.brand} has a ${carBrand.model} of a ${carBrand.model} that was produced in ${carBrand.year}. It is  ${carBrand.transmission} and it is ${carBrand.drivetrains} `
        } 

// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements

        document.querySelector('[data-car1]').innerText = globalFunction(car1);
        document.querySelector('[data-car2]').innerText = globalFunction(car2);
        document.querySelector('[data-car3]').innerText = globalFunction(car3);
        document.querySelector('[data-car4]').innerText = globalFunction(car4);


// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 
// 'This item does appear in the array' or 'The item does not appear in the array'

        if (coolCars + "BMW"){
                console.log('This item does appear in the array')
        } else {
                console.log ('Thi item does not appear in the array')
        }

// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middleNum value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
        let numbers = [5, 18, 14, 16, 2, 1]
        let indexNum = (numbers.length / 2);
        let middleValue;

        if (numbers.length % 2 === 0) {
                middleValue = [numbers [indexNum -1], numbers[indexNum]]
        } else {
                middleValue = numbers [indexNum];
        }
        console.log(middleValue);

// 32. Go back to Question 16 and use the conditional statement you created. 
// The age has to be requested from the user and the message ust be written to the html page in the corresponding element
        
        let somesAge = prompt ('Enter Your Age');
        document.getElementById('Ques32').innerText = somesAge;   