function changeLanguage(lang) {
    if (lang === 'en') {
      document.getElementById('text1').textContent = "Your best aid when acquiring your passport and visa to travel to the U.S.";
      document.getElementById('text2').textContent = "HEROTRAVEL helps you handle what's needed for you to go to the U.S. The fastest and easiest way possible.";
      document.getElementById('con').textContent = "CONTACT";
      document.getElementById('tra').textContent = "PROCEDURES";
      document.getElementById('ser').textContent = "SERVICES";
      alert('Content changed to English');
    } else if (lang === 'es') {
      document.getElementById('text1').textContent = "Tu mejor opcion al adquirir tu pasaporte y visa para viajar a los EE. UU.";
      document.getElementById('text2').textContent = "HEROTRAVEL te ayuda con lo que necesitas para ir a los EE. UU. de la manera más rápida y fácil posible.";
      document.getElementById('con').textContent = "CONTACTO";
      document.getElementById('tra').textContent = "TRAMITES";
      document.getElementById('ser').textContent = "SERVICIOS";
      alert('Contenido cambiado a Español');    
    }
  }