function countdown()
           {
            var hours = document.getElementById('hours');
            var minutes = document.getElementById('min');
            var seconds = document.getElementById('sec');
            var days = document.getElementById('days');
            
            
            var futureDate = new Date("30 september 2023");
            var currentDate = new Date( );
            var myDate = futureDate-currentDate;
            // console.log(myDate);

            var  days = Math.floor(myDate / 1000 / 60 /  60 / 24);
            var hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
            var min = Math.floor(myDate / 1000 / 60) % 60;
            var  sec = Math.floor(myDate / 1000) % 60;

            

            hours.innerHTML=hours;
            minutes.innerHTML=min;
            seconds.innerHTML=sec;
            days.innerHTML=days;
            

           };
           setInterval(countdown, 1000);
   