if (window.location.href !== "https://nurture.edmension.com/en/home") {
  window.location.href = "https://nurture.edmension.com/en/home";
}

function completeForm() {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  console.log(csrfToken);

  const url = 'https://nurture.edmension.com/en/check-ins';
  const data = {
    _token: csrfToken,  
    energy: 'High',
    feeling: 'Pleasant',
    mood: 'Excited',
    strength: '4',
    reason: 'Schoolwork / Exams',
    exercise: '0 Minutes',
    sleep: '<4 Hours',
    screen: '45 Minutes'
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': '*/*',
      'Cache-Control': 'no-cache',
      'Origin': 'https://nurture.edmension.com',
      'X-CSRF-TOKEN': csrfToken,  // CSRF token
      'X-Requested-With': 'XMLHttpRequest',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'User-Agent': 'Mozilla/5.0 (Android; Android 4.3.1; Nokia 3210 Build/IMM76D) AppleWebKit/533.26 (KHTML, like Gecko) Chrome/50.0.3147.269 Mobile Safari/602.5',
    },
    body: new URLSearchParams(data), 
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);  
      if (result && result.message) {
        alert(result.message);
      } else {
        alert('No message in response');
      }
    })
    .catch(error => console.error('Error:', error));
}


var button = document.createElement('button');
button.textContent = 'Auto Complete Form';
button.style.position = 'absolute';
button.style.right = '10px';  
button.style.top = '50%';    
button.style.transform = 'translateY(-50%)';  
button.onclick = completeForm; 

var navbarContent = document.querySelector('.navbar-content');
navbarContent.style.position = 'relative';  
navbarContent.appendChild(button);
