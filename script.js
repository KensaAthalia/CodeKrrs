$('#logout').click((e)=>{
    title: 'Logout Confirmation';
    if (confirm("Anda ingin logout?")) {
      $('#logout').attr('href','Index.html');
    } else {
      $('#logout').attr('href','#');
    }
    });

