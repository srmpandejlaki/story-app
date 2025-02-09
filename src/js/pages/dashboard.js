const Dashboard = {
  async init() {
    await this._initialData();
  },
 
  async _initialData() {
    const fetchRecords = await fetch('/data/data-story.json');
    const responseRecords = await fetchRecords.json();
    this._userStoryHistory = responseRecords.listStory;
    this._populateStoryRecordToTable(this._userStoryHistory);
    this._populateStoryDataToCard(this._userStoryHistory);
  },
 
  _populateStoryDataToCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(
          `Parameter responseRecords should be an object.`,
      );
    }
 
    if (!Array.isArray(listStory)) {
      throw new Error('Parameter transactionsHistory should be an array.');
    }
  },
 
  _populateStoryRecordToTable(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(
        `Parameter transactionsHistory should be an object. The value is ${listStory}`,
      );
    }
 
    if (!Array.isArray(listStory)) {
      throw new Error(
        `Parameter transactionsHistory should be an array. The value is ${listStory}`,
      );
    }
 
    const recordListsStory = document.querySelector('#listStory');
 
    recordListsStory.innerHTML = '';
    if (listStory.length <= 0) {
      recordListsStory.innerHTML = this._templateEmptyListsStory();
      return;
    }
 
    listStory.forEach((item, idx) => {
      recordListsStory.innerHTML += this._templateListsStory(idx, listStory[idx]);
    });
  },
 
  _templateListsStory(listStory) {
    return `
      <div id="${listStory.id}" class="storyItem">
        <img class="storyImage" src="${listStory.photoUrl}" alt="story image">
        <h2 class="storyName">${listStory.name}</h2>
        <p class="storyDesc">${listStory.description}</p>
        <p class="storyDesc">${listStory.createdAt}</p>
      </div>
    `;
  },
 
  _templateEmptyListsStory() {
    return `
      <div class="storyItem">
        <div class="text-center">Tidak ada catatan transaksi</div>
      </div>
    `;
  },
};
 
export default Dashboard;