<script type="text/javascript">
function validasi_input(form){
   pola_nama=/^[A-Z\_\-]{3,100}$/;
   if (!pola_nama.test(form.nama.value)){
      alert ('nama minimal 3 karakter dan hanya boleh huruf besar!');
      form.name.focus();
      return false;
   }
return (true);
}
function validasi_input(form){
Pola_umur=/^[0-9\_\-]{0,2}$/;
if (! pola_umur.test(form.umur.value)){
alert ('umur harus dua digit') ;
form.umur.focus();
return false;
} 
return (true) ;
}
 function validasi_input(form){
   pola_username=/^[4\a-z](_/.){3\0-9}$/;
   if (!pola_username.test(form.username.value)){
      alert ('Username harus menggunakan 4 huruf kecil kemudian underscore atau titik dan 3 angka!');
      form.username.focus();
      return false;
   }
return (true);
}

</script>
