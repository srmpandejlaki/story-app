import CheckUserAuth from './auth/check-user-auth';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();
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

      this._theListStories(this._userStoryHistory);
    } catch (error) {
      console.error("Error fetching data:", error);
      this._userStoryHistory = [];
    }
  },

  _theListStories(listStory = []) {
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

    listStory.forEach((item) => {
      recordListsStory.innerHTML += this._templateListsStory(item);
    });
  },

  _templateListsStory(item) {
    let formattedDate = "Tanggal tidak tersedia";
    if (item.createdAt) {
      const date = new Date(item.createdAt);
      if (!isNaN(date.getTime())) {
        formattedDate = date.toLocaleDateString('id-ID', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
      }
    }
    
    return `
      <div id="${item.id}" class="storyItem card">
        <img class="storyImage" src="${item.photoUrl}" alt="story image">
        <div class="storyDesc">
          <h2 class="storyName">${item.name}</h2>
          <p>${item.description}</p>
          <p>${formattedDate}</p>
        </div>
      </div>
    `;
  },

  _templateEmptyListsStory() {
    return `
      <div class="storyItem">
        <div class="text-center">Tidak ada catatan transaksi</div>

        <div id="item" class="card" aria-hidden="true">
          <img class="card-img-top" src="..." alt="...">
          <div class="card-body">
            <h2 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h2>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>
    `;
  },
};

export default Dashboard;
