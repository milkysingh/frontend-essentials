const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  const selectedButton = event.currentTarget;
  //hide all the panels first
  tabPanels.forEach((tabPanel) => {
    tabPanel.hidden = true;
  });
  //make all the tab button as unselected
  tabButtons.forEach((tab) => tab.setAttribute("aria-selected", false));
  //make the clicked tab as selected
  selectedButton.setAttribute("aria-selected", true);
  // show the tabPanel associated with the clicked tab button using id
  const tabPanel = document.querySelector(
    `[aria-labelledby=${selectedButton.id}]`
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
