
const CardWishlist = () => {

    return(
    <div>

    <div className="main">
      <div class="copy-container">
        <h2>Daftar Bacaan</h2>
      </div>
      
      <div class="contents">
        <div class="contents-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fbebek_buruk_rupa%2Fbebek_buruk_rupa_thumbnail.png?alt=media&token=882c7bba-8573-40e3-8e8f-59313bc2dca3" alt=""/>
          <div class="bottom-left">
            <p>Bebek Buruk Rupa</p>
            <p>Ditambahkan pada 23 Maret 2022</p>
          </div>
          <button>Baca</button>
          <button>Hapus</button>
        </div>

        <div class="contents-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fkancil_buaya%2Fkancil_buaya_thumnail.png?alt=media&token=63bd1744-9f1b-4d7b-a039-2fd9544cf8de" alt=""/>
          <p>Kancil dan Buaya</p>
          <p>Ditambahkan pada 23 Maret 2022</p>
          <button>Baca</button>
          <button>Hapus</button>
        </div>

        <div class="contents-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fkancil_harimau%2Fkancil_harimau_thumbnail.png?alt=media&token=3f4ac2bd-1881-4e68-b2db-a1787d94dec2" alt=""/>
          <p>Kancil dan Harimau</p>
          <p>Ditambahkan pada 23 Maret 2022</p>
          <button>Baca</button>
          <button>Hapus</button>
        </div>

        <div class="contents-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fkelinci_kura%2Fkelinci_kura_thumbnail.png?alt=media&token=4d49b8cb-579d-4ac0-91d7-060a911fbf90" alt=""/>
          <p>Kelinci dan Kura-kura</p>
          <p>Ditambahkan pada 23 Maret 2022</p>
          <button>Baca</button>
          <button>Hapus</button>
        </div>
      </div>
    </div>
    </div>
    )
}

export default CardWishlist;