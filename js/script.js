const header = document.getElementsByTagName("header")[0];
const menubar = document.getElementById("menubar");
window.addEventListener("scroll", (e) => {
  let value = window.scrollY;
  if (value < 74) {
    header.classList.add("bg-white");
    menubar.classList.add("bg-[rgba(249,247,243)]");
  } else {
    header.classList.add("bg-[rgba(255,255,255,0.7)]");
    menubar.classList.add("bg-[rgba(249,247,243,0.7)]");
  }
});

const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationDiv = document.getElementById("donationDiv");
const historyDiv = document.getElementById("historyDiv");
function historyTogol(e) {
  if (e.innerText == "Donation") {
    donationBtn.classList.add("bg-primary", "hover:bg-primary");
    historyBtn.classList.remove("bg-primary", "hover:bg-primary");
    donationDiv.classList.remove("hidden");
    historyDiv.classList.add("hidden");
  } else {
    historyBtn.classList.add("bg-primary", "hover:bg-primary");
    donationBtn.classList.remove("bg-primary", "hover:bg-primary");
    historyDiv.classList.remove("hidden");
    donationDiv.classList.add("hidden");
  }
}

const input = document.querySelectorAll("input[type=text]");
const headeramount = document.getElementById("headeramount");
const donationamount = document.querySelectorAll("#donationamount");
const donateMoneyBtn = document.querySelectorAll("#donateMoneyBtn");
const modal = document.getElementById("my_modal_5");
for (let i = 0; i < donateMoneyBtn.length; i++) {
  donateMoneyBtn[i].addEventListener("click", (e) => {
    if (e.target.classList[0].toLowerCase() === "feni") {
      let value = input[1].value;
      if (value > 0) {
        donationamount[1].innerText =
          parseFloat(donationamount[1].innerText) + parseFloat(value);
        headeramount.innerText =
          parseFloat(headeramount.innerText) - parseFloat(value);
        const time = new Date();
        let text = `<div class="p-8 rounded-2xl shadow-historycardShadow mb-2">
           <h2 class="text-xl font-bold text-secondary"> ${value} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
           <p class="text-base font-light text-textColor">${time}</p>
        </div>`;
        historyDiv.innerHTML += text;
        input[1].value = "";
        modal.showModal();
      } else {
        alert("Your amount is not valid");
        input[1].value = "";
      }
    } else if (e.target.classList[0].toLowerCase() === "noakhali") {
      let value = input[0].value;
      if (value > 0) {
        donationamount[0].innerText =
          parseFloat(donationamount[0].innerText) + parseFloat(value);
        headeramount.innerText =
          parseFloat(headeramount.innerText) - parseFloat(value);
        const time = new Date();
        let text = `<div class="p-8 rounded-2xl shadow-historycardShadow mb-2">
           <h2 class="text-xl font-bold text-secondary"> ${value} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
           <p class="text-base font-light text-textColor">${time}</p>
        </div>`;
        historyDiv.innerHTML += text;
        input[0].value = "";
        modal.showModal();
      } else {
        alert("Your amount is not valid");
        input[0].value = "";
      }
    } else {
      let value = input[2].value;
      if (value > 0) {
        donationamount[2].innerText =
          parseFloat(donationamount[2].innerText) + parseFloat(value);
        headeramount.innerText =
          parseFloat(headeramount.innerText) - parseFloat(value);
        const time = new Date();
        let text = `<div class="p-8 rounded-2xl shadow-historycardShadow mb-2">
           <h2 class="text-xl font-bold text-secondary"> ${value} Taka is Aid for Injured in the Quota Movement</h2>
           <p class="text-base font-light text-textColor">${time}</p>
        </div>`;
        historyDiv.innerHTML += text;
        input[2].value = "";
        modal.showModal();
      } else {
        alert("Your amount is not valid");
        input[2].value = "";
      }
    }
  });
}

// link with another html page
document.getElementById("blog").addEventListener("click", () => {
  location.href = "/ph-B10A5/blog.html";
})
