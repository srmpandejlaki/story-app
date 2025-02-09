const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    try {
      const fetchRecords = await fetch('/data/data-story.json');
      const responseRecords = await fetchRecords.json();

      // Pastikan listStory ada dan berupa array
      this._userStoryHistory = Array.isArray(responseRecords.listStory)
        ? responseRecords.listStory
        : [];

      this._populateStoryRecordToTable(this._userStoryHistory);
      this._populateStoryDataToCard(this._userStoryHistory);
    } catch (error) {
      console.error("Error fetching data:", error);
      this._userStoryHistory = [];
    }
  },

  _populateStoryDataToCard(listStory = []) {
    if (!Array.isArray(listStory)) {
      throw new Error('Parameter listStory harus berupa array.');
    }
  },

  _populateStoryRecordToTable(listStory = []) {
    if (!Array.isArray(listStory)) {
      throw new Error('Parameter listStory harus berupa array.');
    }

    const recordListsStory = document.querySelector('#listStory');

    if (!recordListsStory) {
      console.error("Elemen dengan id 'listStory' tidak ditemukan.");
      return;
    }

    recordListsStory.innerHTML = '';
    
    if (listStory.length === 0) {
      recordListsStory.innerHTML = this._templateEmptyListsStory();
      return;
    }

    listStory.forEach((item, idx) => {
      recordListsStory.innerHTML += this._templateListsStory(item);
    });
  },

  _templateListsStory(item) {
    return `
      <div id="${item.id}" class="storyItem">
        <img class="storyImage" src="${item.photoUrl}" alt="story image">
        <h2 class="storyName">${item.name}</h2>
        <p class="storyDesc">${item.description}</p>
        <p class="storyDesc">${item.createdAt}</p>
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
