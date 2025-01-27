let targetTime = 0;
        let timerInterval = null;

        function startTimer() {
            const days = parseInt(document.getElementById('inputDays').value) || 0;
            const hours = parseInt(document.getElementById('inputHours').value) || 0;
            const minutes = parseInt(document.getElementById('inputMinutes').value) || 0;
            const seconds = parseInt(document.getElementById('inputSeconds').value) || 0;

            const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
            
            if (totalSeconds <= 0) {
                alert('Please enter a valid duration!');
                return;
            }

            targetTime = Date.now() + (totalSeconds * 1000);
            
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);
            updateTimer();
        }

        function updateTimer() {
            const now = Date.now();
            const diff = targetTime - now;

            if (diff <= 0) {
                clearInterval(timerInterval);
                document.querySelector('.countdown').innerHTML = 
                    '<div class="expired">TIME EXPIRED!</div>';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }