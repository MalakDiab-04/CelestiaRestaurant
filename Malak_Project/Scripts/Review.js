    function addReview() {

     var name = document.getElementById("reviewName").value;
     var message = document.getElementById("reviewMessage").value;

      var reviewItem = document.createElement("li");
      reviewItem.className = "review-item";

      var img = document.createElement("img");
      img.src= "Images/Review/profile_pic.svg";
      img.width = 20;
      reviewItem.appendChild(img);
      
      var namePara = document.createElement("p");
      namePara.textContent = name;
      namePara.style.fontSize = "20px";
      namePara.style.display = "inline-block";
      reviewItem.appendChild(namePara);

      var messagePara = document.createElement("p");
      messagePara.textContent = "''" + message + "''";
      messagePara.style.fontSize="18px";
      messagePara.style.marginTop="0";
      messagePara.style.marginLeft="35px";
      reviewItem.appendChild(messagePara); // Append the message paragraph to the review item
  
      document.getElementById("reviewsList").appendChild(reviewItem);

      // Clear form fields
      document.getElementById("reviewName").value = "";
      document.getElementById("reviewMessage").value = "";
    }
