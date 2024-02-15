const BASE_URL = 'https://dummyapi.io/data/v1';
const API_KEY = '65caf71bc745c482c2ae405e';
async function fetchPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/post`, {
      headers: { 'app-id': API_KEY }
    });
    const postGrid = document.querySelector('.grid');
    const posts = response.data.data;
    posts.forEach(post => {
      const postItem = document.createElement('div');
      postItem.classList.add('border', 'border-gray-300', 'rounded-md', 'overflow-hidden');
      const image = post.image ? `<img src="${post.image}" class="w-full h-40 object-cover" alt="Post Image">` : '';
      const textPreview = post.text.length > 50 ? post.text.substring(0, 50) + '...' : post.text;
      postItem.innerHTML = `
                    ${image}
                    <div class="p-4">
                    <p class="text-sm text-gray-500">${post.owner.firstName} ${post.owner.lastName}</p>
                    <a href="rasm1.html?id=${post.id}" class="text-blue-500">View Details</a>
                    <h3 class="text-lg font-semibold">${textPreview}</h3>
                    </div>
                `;
      postGrid.appendChild(postItem);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
fetchPosts();