/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example



//____________________________________________________________________Project______________________________________________________________
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (n_name,n_hairColour,n_drip,n_age) {
    const NFT ={
        "Name": n_name,
        "HairColour": n_hairColour,
        "Drip": n_drip,
        "Age": n_age
    }
    myNFT.push(NFT);
    console.log(n_name+" minted!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0 ; i < myNFT.length;i++){
        console.log("\nID: \t\t"+ (i+1));
        console.log("Name: \t\t"+ myNFT[i].Name);
        console.log("HairColour: "+myNFT[i].HairColour);
        console.log("Drip: \t\t"+myNFT[i].Drip);
        console.log("Age: \t\t"+myNFT[i].Age);

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+myNFT.length);
}

// call your functions below this line
mintNFT("Yash", "Grey", "Dock Tag" ,19);
mintNFT("Ayushi", "Black", "Bandana" ,19);
mintNFT("Sahil", "Blond", "Chain" ,20);
mintNFT("Jigyashu", "Grey", "Ring" ,20);
mintNFT("Runjhun", "Pink", "Bracelet" ,18);

listNFTs();
getTotalSupply();
