const token = 'e1jdHvvSKHLtNtEAFk4tKShsRPB0uanNaJ2HfEeD';
const data = new URLSearchParams({
  category_id: '2',
  recipient_id: '6501',
  body: 'hihihi1'
});

fetch('https://nurture.edmension.com/en/posts', {
  method: 'POST',
  headers: {
    'X-CSRF-TOKEN': token,
    'User-Agent': 'Mozilla/5.0 (Android; Android 4.3.1; Nokia 3210 Build/IMM76D) AppleWebKit/533.26 (KHTML, like Gecko) Chrome/50.0.3147.269 Mobile Safari/602.5'
  },
  body: data
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
