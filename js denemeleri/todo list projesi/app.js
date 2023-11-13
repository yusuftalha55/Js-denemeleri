document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde yapılacak işlemler
    const taskForm = document.querySelector('form'); // Görev ekleme formunu seçin
    const taskTable = document.querySelector('table tbody'); // Görevleri görüntülemek için tabloyu seçin
  
    // Görev ekleme formunu gönderme işlemi
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Formun otomatik olarak gönderilmesini önler
  
      const taskInput = document.querySelector('#form1'); // Görev girişini seçin
      const taskText = taskInput.value.trim(); // Giriş değerini alın ve boşlukları kaldırın
  
      if (taskText !== '') {
        // Görev boş değilse
        const newRow = document.createElement('tr'); // Yeni bir satır oluşturun
        newRow.innerHTML = `
          <th scope="row">${taskTable.children.length + 1}</th>
          <td>${taskText}</td>
          <td>In progress</td>
          <td>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-success ms-1">Finished</button>
          </td>
        `;
  
        // Yeni satırı tabloya ekleyin
        taskTable.appendChild(newRow);
  
        // Görev girişini temizleyin
        taskInput.value = '';
      }
    });
  
    // Görevleri silme ve tamamlama işlemleri
    taskTable.addEventListener('click', function (e) {
      if (e.target.classList.contains('btn-danger')) {
        // Silme düğmesi tıklandığında
        const row = e.target.closest('tr'); // Tıklanan düğmenin en yakın satırını bulun
        if (row) {
          taskTable.removeChild(row); // Satırı tablodan kaldırın
        }
      } else if (e.target.classList.contains('btn-success')) {
        // Tamamlama düğmesi tıklandığında
        const statusCell = e.target.parentElement.previousElementSibling; // Durum hücresini bulun
        if (statusCell) {
          statusCell.textContent = 'Finished'; // Durumu "Tamamlandı" olarak güncelleyin
        }
      }
    });
  });
  