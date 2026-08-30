window.eventDatabase = [
    {
        "id": "evt_1",
        "elci": "vezir",
        "baslik": "Ekmek İsyanı",
        "metin": "İstanbul'da ekmek fiyatları halkı isyana sürüklüyor. Fırıncılar un bulamadıklarını söylüyor.",
        "secenekler": [
            {
                "metin": "Fırıncılara sabit fiyat zorunluluğu getir.",
                "etkiler": {
                    "halk": 15,
                    "gelir": -10
                },
                "sonuc_metni": "Halk rahatladı ama hazineden un sübvansiyonu gerekti."
            },
            {
                "metin": "Piyasaya karışma, kendi haline bırak.",
                "etkiler": {
                    "halk": -20,
                    "gelir": 5
                },
                "sonuc_metni": "Fırıncılar zenginleşti, halk sokaklarda bağırıyor."
            }
        ]
    },
    {
        "id": "evt_2",
        "elci": "vezir",
        "baslik": "Ulu Cami Onarımı",
        "metin": "Şehrin en büyük camisinin kubbesi onarım bekliyor. Ulema cemaatin şikayetçi olduğunu belirtiyor.",
        "secenekler": [
            {
                "metin": "Derhal hazineden ödenek ayırın.",
                "etkiler": {
                    "halk": 10,
                    "gelir": -15,
                    "din": 15
                },
                "sonuc_metni": "Cami onarıldı, ulema sana dualar ediyor."
            },
            {
                "metin": "Şimdi sırası değil, seneye bakarız.",
                "etkiler": {
                    "halk": -5,
                    "din": -15
                },
                "sonuc_metni": "Ulema hutbelerde üstü kapalı sitem ediyor."
            }
        ]
    },
    {
        "id": "evt_3",
        "elci": "vezir",
        "baslik": "Matbaa İzni",
        "metin": "Avrupa'dan gelen bir elçi heyeti, matbaa kurmak için izin istiyor.",
        "secenekler": [
            {
                "metin": "İzin ver, ilim yayılsın.",
                "etkiler": {
                    "halk": 5,
                    "gelir": 10,
                    "din": -15
                },
                "sonuc_metni": "Hattatlar ayaklansa da hazineye yeni gelir kapısı açıldı."
            },
            {
                "metin": "Geleneklerimizi bozamayız, reddedin.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -5,
                    "din": 10
                },
                "sonuc_metni": "Ulema memnun, ancak gelişim fırsatı kaçtı."
            }
        ]
    },
    {
        "id": "evt_4",
        "elci": "vezir",
        "baslik": "Sahte Mehdi",
        "metin": "Anadolu'da bir kasabada kendisinin mehdi olduğunu iddia eden biri türedi.",
        "secenekler": [
            {
                "metin": "Üzerine ordu gönder, isyanı ez.",
                "etkiler": {
                    "halk": -10,
                    "asker": 5,
                    "din": 10
                },
                "sonuc_metni": "İsyan kanlı bastırıldı. Otoriten pekişti."
            },
            {
                "metin": "Görmezden gel, kendi kendine söner.",
                "etkiler": {
                    "asker": -10,
                    "din": -15
                },
                "sonuc_metni": "Müritleri çoğaldı ve vergi vermemeye başladılar."
            }
        ]
    },
    {
        "id": "evt_5",
        "elci": "vezir",
        "baslik": "Veba Salgını",
        "metin": "Halk arasında yeni bir salgın hastalık yayılıyor. Karantina uygulayalım mı?",
        "secenekler": [
            {
                "metin": "Evet, şehre giriş çıkışları kapatın.",
                "etkiler": {
                    "halk": 15,
                    "gelir": -20
                },
                "sonuc_metni": "Ticaret durdu ama can kayıpları azaldı."
            },
            {
                "metin": "Allah'ın takdiri, ticareti durduramayız.",
                "etkiler": {
                    "halk": -25,
                    "gelir": 10,
                    "asker": -5
                },
                "sonuc_metni": "Hastalık orduya bile sıçradı."
            }
        ]
    },
    {
        "id": "evt_6",
        "elci": "vezir",
        "baslik": "Mutfak Masrafları",
        "metin": "Saray mutfağının masrafları çok arttı. Aşçılar zam istiyor.",
        "secenekler": [
            {
                "metin": "İsteklerini verin, şanımıza yakışsın.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -10
                },
                "sonuc_metni": "Ziyafetler devam ediyor, hazine eriyor."
            },
            {
                "metin": "Tasarrufa gidin, israfı kesin.",
                "etkiler": {
                    "halk": 5,
                    "gelir": 10
                },
                "sonuc_metni": "Halk sarayın tutumluluğunu takdir etti."
            }
        ]
    },
    {
        "id": "evt_7",
        "elci": "vezir",
        "baslik": "Hicivci Şair",
        "metin": "Bir şair sizin hakkınızda hicivli şiirler yazıyor. Zindana atalım mı?",
        "secenekler": [
            {
                "metin": "Atın zindana, haddini bilsin.",
                "etkiler": {
                    "halk": -10,
                    "asker": 5
                },
                "sonuc_metni": "Şair susturuldu ama halk arasında fısıltılar arttı."
            },
            {
                "metin": "Bırakın yazsın, büyüklük bizde kalsın.",
                "etkiler": {
                    "halk": 15,
                    "asker": -5
                },
                "sonuc_metni": "Şairin sivri dili törpülendi, halk hoşgörünü sevdi."
            }
        ]
    },
    {
        "id": "evt_8",
        "elci": "vezir",
        "baslik": "Kahvehaneler",
        "metin": "Ramazan ayında bazı kahvehanelerin gizlice açık kaldığı tespit edildi.",
        "secenekler": [
            {
                "metin": "Hepsini kapatın, sahiplerini sürün.",
                "etkiler": {
                    "halk": -10,
                    "gelir": -5,
                    "din": 15
                },
                "sonuc_metni": "Ulema çok memnun, ama esnaf perişan."
            },
            {
                "metin": "Sadece uyarı verin, kapatmayın.",
                "etkiler": {
                    "halk": 10,
                    "gelir": 5,
                    "din": -15
                },
                "sonuc_metni": "Kahvehaneler çalışıyor, muhafazakarlar öfkeli."
            }
        ]
    },
    {
        "id": "evt_9",
        "elci": "vezir",
        "baslik": "Kadıların Rüşveti",
        "metin": "Bazı kadıların rüşvet aldığına dair şikayetler artıyor.",
        "secenekler": [
            {
                "metin": "Geniş çaplı bir soruşturma başlatın.",
                "etkiler": {
                    "halk": 15,
                    "din": -15,
                    "gelir": 5
                },
                "sonuc_metni": "Adalet sağlandı ama ulema rahatsız."
            },
            {
                "metin": "Sadece birkaçını görevden alın.",
                "etkiler": {
                    "halk": 5,
                    "din": -5
                },
                "sonuc_metni": "Sorun geçici olarak çözüldü."
            }
        ]
    },
    {
        "id": "evt_10",
        "elci": "vezir",
        "baslik": "Medrese Tartışması",
        "metin": "İki büyük medrese arasında fıkıh tartışması büyüyor, öğrenciler sokaklarda çatışıyor.",
        "secenekler": [
            {
                "metin": "Tartışmayı yasakla, elebaşlarını sürgün et.",
                "etkiler": {
                    "halk": 5,
                    "din": -20
                },
                "sonuc_metni": "Sokaklar sakinleşti ama alimler kırgın."
            },
            {
                "metin": "Münazara düzenle, kazananı ödüllendir.",
                "etkiler": {
                    "halk": 10,
                    "din": 15,
                    "gelir": -10
                },
                "sonuc_metni": "İlmi bir şölene dönüştü, ulema takdir etti."
            }
        ]
    },
    {
        "id": "evt_11",
        "elci": "vezir",
        "baslik": "Yeni Vergi Tepkisi",
        "metin": "Halk yeni koyulan su vergisine karşı ayaklanmak üzere.",
        "secenekler": [
            {
                "metin": "Vergiyi geri çek.",
                "etkiler": {
                    "halk": 20,
                    "gelir": -20
                },
                "sonuc_metni": "Halk şenlikler düzenliyor, hazine açık verdi."
            },
            {
                "metin": "İsyancıları zorla bastır.",
                "etkiler": {
                    "halk": -25,
                    "asker": 10,
                    "gelir": 10
                },
                "sonuc_metni": "Kan döküldü ama vergi toplandı."
            }
        ]
    },
    {
        "id": "evt_12",
        "elci": "vezir",
        "baslik": "Kıtlık Tehlikesi",
        "metin": "Mısır'dan beklenen tahıl gemileri gecikti, başkentte panik var.",
        "secenekler": [
            {
                "metin": "Depolardaki yedek tahılı halka dağıt.",
                "etkiler": {
                    "halk": 15,
                    "gelir": -15,
                    "asker": -5
                },
                "sonuc_metni": "Halk doydu ama askerin erzağı azaldı."
            },
            {
                "metin": "Tüccarları stok yapmamaları için tehdit et.",
                "etkiler": {
                    "halk": 5,
                    "gelir": 5,
                    "din": -5
                },
                "sonuc_metni": "Kısmi rahatlama sağlandı."
            }
        ]
    },
    {
        "id": "evt_13",
        "elci": "vezir",
        "baslik": "Yabancı Elçiler",
        "metin": "Fransız elçisi sarayda öncelik istiyor, yoksa ülkelerine dönecekler.",
        "secenekler": [
            {
                "metin": "İsteklerini kabul et.",
                "etkiler": {
                    "din": -10,
                    "gelir": 15
                },
                "sonuc_metni": "Ticaret antlaşmaları imzalandı ama muhafazakarlar kızgın."
            },
            {
                "metin": "Geleneklerimize uymayanı kovarız.",
                "etkiler": {
                    "din": 10,
                    "gelir": -15,
                    "halk": 5
                },
                "sonuc_metni": "Halk dik duruşunu sevdi, dış ticaret sekteye uğradı."
            }
        ]
    },
    {
        "id": "evt_14",
        "elci": "vezir",
        "baslik": "Zelzele",
        "metin": "Büyük bir zelzele (deprem) şehri vurdu. Evler yıkıldı.",
        "secenekler": [
            {
                "metin": "Tüm hazineyi seferber et, şehri onar.",
                "etkiler": {
                    "halk": 25,
                    "gelir": -30,
                    "asker": -10
                },
                "sonuc_metni": "Şehir yeniden inşa ediliyor, ancak devlet fakirleşti."
            },
            {
                "metin": "Sadece önemli devlet binalarını onar.",
                "etkiler": {
                    "halk": -25,
                    "gelir": -5
                },
                "sonuc_metni": "Halk sefalet içinde seni suçluyor."
            }
        ]
    },
    {
        "id": "evt_15",
        "elci": "vezir",
        "baslik": "İlmi Eser",
        "metin": "Büyük bir alim, padişahlığa adadığı devasa bir tefsir kitabı yazdı.",
        "secenekler": [
            {
                "metin": "Kendisini altınla ödüllendir.",
                "etkiler": {
                    "din": 20,
                    "gelir": -15,
                    "halk": 5
                },
                "sonuc_metni": "Alimler zümresi etrafında kenetlendi."
            },
            {
                "metin": "Sadece teşekkür mektubu gönder.",
                "etkiler": {
                    "din": -10,
                    "gelir": 5
                },
                "sonuc_metni": "Alim beklediği değeri bulamadı."
            }
        ]
    },
    {
        "id": "evt_16",
        "elci": "serdar",
        "baslik": "Yeniçeri Ulufesi",
        "metin": "Hünkarım, Yeniçeriler ulufe gününde bahşiş istiyorlar, aksi halde kazan kaldıracaklar.",
        "secenekler": [
            {
                "metin": "İstediklerini ver, isyan çıkmasın.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -20,
                    "asker": 15
                },
                "sonuc_metni": "Askerin karnı tok ama hazine sarsıldı."
            },
            {
                "metin": "Reddet ve elebaşlarını sürgüne yolla.",
                "etkiler": {
                    "halk": 5,
                    "asker": -25,
                    "din": 5
                },
                "sonuc_metni": "Yeniçeri ocağında büyük bir huzursuzluk var!"
            }
        ]
    },
    {
        "id": "evt_17",
        "elci": "serdar",
        "baslik": "Sınır Kaleleri",
        "metin": "Sınırdaki kalelerimiz dökülüyor. Düşman saldırırsa dayanamayız. Onarım şart.",
        "secenekler": [
            {
                "metin": "Sınır güvenliği her şeyden mühimdir, onarın.",
                "etkiler": {
                    "gelir": -15,
                    "asker": 20
                },
                "sonuc_metni": "Kaleler güçlendirildi, ordu güvende hissediyor."
            },
            {
                "metin": "Şu an bütçe yok, idare etsinler.",
                "etkiler": {
                    "halk": -5,
                    "gelir": 5,
                    "asker": -20
                },
                "sonuc_metni": "Sınır boylarından kötü haberler geliyor..."
            }
        ]
    },
    {
        "id": "evt_18",
        "elci": "serdar",
        "baslik": "Venedik Korsanları",
        "metin": "Venedik kalyonları Akdeniz'deki ticaret gemilerimize el koydu. Misilleme yapalım mı?",
        "secenekler": [
            {
                "metin": "Donanmayı üzerlerine gönder!",
                "etkiler": {
                    "halk": 10,
                    "gelir": -15,
                    "asker": -10,
                    "din": -10
                },
                "sonuc_metni": "Kısa bir deniz savaşı yaşandı, iki taraf da kayıp verdi."
            },
            {
                "metin": "Diplomatik bir nota gönderin, savaştan kaçının.",
                "etkiler": {
                    "halk": -10,
                    "gelir": 5,
                    "asker": -5,
                    "din": 15
                },
                "sonuc_metni": "Savaş çıkmadı ama itibarımız zedelendi."
            }
        ]
    },
    {
        "id": "evt_19",
        "elci": "serdar",
        "baslik": "Yeni Tüfekler",
        "metin": "Orduda yeni nesil tüfeklere geçiş yapmamız gerekiyor ama asker eski usule alışkın.",
        "secenekler": [
            {
                "metin": "Eğitimleri zorunlu tut, yeniliğe ayak uydurun.",
                "etkiler": {
                    "gelir": -10,
                    "asker": 15,
                    "din": -5
                },
                "sonuc_metni": "Askerler başta mırıldandı ama ateş gücümüz arttı."
            },
            {
                "metin": "Eski köye yeni adet getirmeyin.",
                "etkiler": {
                    "asker": -15,
                    "din": 10
                },
                "sonuc_metni": "Ordu eski usul devam ediyor, gücümüz geriliyor."
            }
        ]
    },
    {
        "id": "evt_20",
        "elci": "serdar",
        "baslik": "Sipahi Toprakları",
        "metin": "Sipahiler kendilerine tahsis edilen toprakların yetersizliğinden şikayetçi.",
        "secenekler": [
            {
                "metin": "Yeni fethedilen yerlerden toprak verin.",
                "etkiler": {
                    "halk": -10,
                    "gelir": -10,
                    "asker": 15
                },
                "sonuc_metni": "Sipahiler sadakat yeminlerini tazeledi."
            },
            {
                "metin": "Elinizdekilerle yetinin deyin.",
                "etkiler": {
                    "halk": 5,
                    "gelir": 5,
                    "asker": -15
                },
                "sonuc_metni": "Sipahiler savaşlarda isteksiz savaşmaya başladı."
            }
        ]
    },
    {
        "id": "evt_21",
        "elci": "serdar",
        "baslik": "Baruthane Patlaması",
        "metin": "Baruthanede büyük bir patlama oldu. Yeniden inşası için para lazım.",
        "secenekler": [
            {
                "metin": "Hemen onarılsın, ordusuz kalmayalım.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -20,
                    "asker": 10
                },
                "sonuc_metni": "Baruthane eskisinden daha sağlam yapıldı."
            },
            {
                "metin": "Şimdilik dışarıdan barut satın alalım.",
                "etkiler": {
                    "gelir": -10,
                    "asker": -10,
                    "din": -5
                },
                "sonuc_metni": "Dışa bağımlılık ordunun moralini bozdu."
            }
        ]
    },
    {
        "id": "evt_22",
        "elci": "serdar",
        "baslik": "Sınırda Gerilim",
        "metin": "Doğu sınırında komşu imparatorluk asker yığıyor. Sefer hazırlığı yapalım mı?",
        "secenekler": [
            {
                "metin": "Davullar çalsın, sefere çıkıyoruz!",
                "etkiler": {
                    "halk": 5,
                    "gelir": -25,
                    "asker": 15,
                    "din": -5
                },
                "sonuc_metni": "Büyük bir ordu toplandı, halk seferberlikte."
            },
            {
                "metin": "Sadece sınır birliklerini teyakkuza geçirin.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -5,
                    "asker": -5,
                    "din": 10
                },
                "sonuc_metni": "Bekle gör politikası izliyoruz."
            }
        ]
    },
    {
        "id": "evt_23",
        "elci": "serdar",
        "baslik": "Rüşvetçi Paşa",
        "metin": "Paşalardan biri ordunun erzağını karaborsada satarken yakalandı.",
        "secenekler": [
            {
                "metin": "İbreti alem için kellesini vurdurun.",
                "etkiler": {
                    "halk": 15,
                    "gelir": 5,
                    "asker": -5,
                    "din": 5
                },
                "sonuc_metni": "Adaletin kestiği parmak acımadı, halk memnun."
            },
            {
                "metin": "Görevinden alın, malına el koyun yeter.",
                "etkiler": {
                    "halk": -5,
                    "gelir": 15,
                    "asker": 5,
                    "din": -5
                },
                "sonuc_metni": "Hazine doldu ama rüşvetin kökü kazınmadı."
            }
        ]
    },
    {
        "id": "evt_24",
        "elci": "serdar",
        "baslik": "Asker Kaçakları",
        "metin": "Son seferde ordudan kaçan askerlerin sayısı arttı.",
        "secenekler": [
            {
                "metin": "Kaçakları yakalatıp idam et.",
                "etkiler": {
                    "halk": -10,
                    "asker": 15,
                    "din": -5
                },
                "sonuc_metni": "Disiplin sağlandı ama orduda korku hakim."
            },
            {
                "metin": "Genel af ilan et, geri dönsünler.",
                "etkiler": {
                    "halk": 10,
                    "asker": -15,
                    "din": 5
                },
                "sonuc_metni": "Halk affı övdü ama ordunun caydırıcılığı azaldı."
            }
        ]
    },
    {
        "id": "evt_25",
        "elci": "serdar",
        "baslik": "Kuşatma Uzadı",
        "metin": "Düşman kalesinin kuşatması aylardır sürüyor, kış yaklaşıyor.",
        "secenekler": [
            {
                "metin": "Son bir genel taarruz emri ver.",
                "etkiler": {
                    "asker": -20,
                    "gelir": 15,
                    "halk": 10
                },
                "sonuc_metni": "Ağır kayıplarla kale düştü, ganimet elde edildi."
            },
            {
                "metin": "Kuşatmayı kaldırıp geri dönün.",
                "etkiler": {
                    "asker": 10,
                    "halk": -15,
                    "din": -10
                },
                "sonuc_metni": "Ordu korundu ama itibarımız zedelendi."
            }
        ]
    },
    {
        "id": "evt_26",
        "elci": "serdar",
        "baslik": "Donanma Gelişimi",
        "metin": "Donanmamızın kalyon sınıfı büyük gemilere ihtiyacı var.",
        "secenekler": [
            {
                "metin": "Tersaneye büyük bütçe ayır.",
                "etkiler": {
                    "gelir": -25,
                    "asker": 20,
                    "halk": 5
                },
                "sonuc_metni": "Muazzam kalyonlar inşa edildi."
            },
            {
                "metin": "Kadırgalarımız şimdilik yeterli.",
                "etkiler": {
                    "gelir": 10,
                    "asker": -15
                },
                "sonuc_metni": "Donanmamız eski usulde kaldı, rakipler güçleniyor."
            }
        ]
    },
    {
        "id": "evt_27",
        "elci": "serdar",
        "baslik": "Ganimet Dağıtımı",
        "metin": "Seferden dönen ordu ganimetin adil dağıtılmadığını söylüyor.",
        "secenekler": [
            {
                "metin": "Askerin payını kendi hazinemden artır.",
                "etkiler": {
                    "gelir": -20,
                    "asker": 20
                },
                "sonuc_metni": "Askerin neşesi yerine geldi."
            },
            {
                "metin": "Komutanlara haklı olduklarını söyle, askeri sustur.",
                "etkiler": {
                    "asker": -25,
                    "halk": 10
                },
                "sonuc_metni": "Asker öfkeli, komutanlar memnun."
            }
        ]
    },
    {
        "id": "evt_28",
        "elci": "serdar",
        "baslik": "Eski Müttefik",
        "metin": "Eskiden bize destek veren bir sınır beyi şimdi isyan bayrağı açtı.",
        "secenekler": [
            {
                "metin": "Özel bir birlik gönderip suikast düzenle.",
                "etkiler": {
                    "asker": 5,
                    "din": -10,
                    "halk": -5
                },
                "sonuc_metni": "İsyan büyümeden lideri yok edildi."
            },
            {
                "metin": "Büyük bir orduyla üzerine yürü.",
                "etkiler": {
                    "asker": 15,
                    "gelir": -15,
                    "halk": 5
                },
                "sonuc_metni": "İsyan gövde gösterisiyle ezildi."
            }
        ]
    },
    {
        "id": "evt_29",
        "elci": "serdar",
        "baslik": "Askeri Liyakat",
        "metin": "Genç ama çok yetenekli bir subay var, yaşlı paşalar onun terfisine karşı.",
        "secenekler": [
            {
                "metin": "Liyakat önemlidir, terfi ettir.",
                "etkiler": {
                    "asker": 15,
                    "halk": 5,
                    "din": -10
                },
                "sonuc_metni": "Genç subay büyük zaferler kazandı, paşalar küskün."
            },
            {
                "metin": "Gelenekleri bozma, paşaları dinle.",
                "etkiler": {
                    "asker": -10,
                    "din": 10
                },
                "sonuc_metni": "Genç yetenek heba oldu, ordu yeniliğe kapalı kaldı."
            }
        ]
    },
    {
        "id": "evt_30",
        "elci": "serdar",
        "baslik": "Tedarik Yolları",
        "metin": "Kış şartlarından dolayı sınıra erzak taşıyan yollar kapandı.",
        "secenekler": [
            {
                "metin": "Civar köylerden zorla erzak topla.",
                "etkiler": {
                    "halk": -25,
                    "asker": 15,
                    "gelir": 5
                },
                "sonuc_metni": "Ordu kurtuldu ama halk seni zalim biliyor."
            },
            {
                "metin": "Aç kalsalar da halka dokunma.",
                "etkiler": {
                    "asker": -25,
                    "halk": 15,
                    "din": 10
                },
                "sonuc_metni": "Askerler açlıktan kırıldı."
            }
        ]
    },
    {
        "id": "evt_31",
        "elci": "hazine",
        "baslik": "Savaş Vergisi",
        "metin": "Padişahım, hazine tamtakır. Acil paraya ihtiyacımız var. Yeni bir savaş vergisi koyalım mı?",
        "secenekler": [
            {
                "metin": "Mecburuz, vergileri artırın.",
                "etkiler": {
                    "halk": -25,
                    "gelir": 30,
                    "din": -5
                },
                "sonuc_metni": "Hazine doldu ama Anadolu'da isyan sesleri yükseliyor."
            },
            {
                "metin": "Halkı daha fazla ezemeyiz, saray masraflarını kısın.",
                "etkiler": {
                    "halk": 15,
                    "gelir": 5,
                    "asker": -10
                },
                "sonuc_metni": "Saray ağaları durumdan hiç memnun değil."
            }
        ]
    },
    {
        "id": "evt_32",
        "elci": "hazine",
        "baslik": "Ceneviz İmtiyazı",
        "metin": "Cenevizli tüccarlar gümrük vergisinde indirim talep ediyor. Karşılığında limanımızı daha çok kullanacaklar.",
        "secenekler": [
            {
                "metin": "İndirimi kabul et, ticaret canlansın.",
                "etkiler": {
                    "halk": 5,
                    "gelir": 15,
                    "din": -10
                },
                "sonuc_metni": "Liman gemilerle doldu, ticaret canlandı."
            },
            {
                "metin": "Ayrıcalık yok, herkese neyse onlara da o.",
                "etkiler": {
                    "halk": -5,
                    "gelir": -10,
                    "din": 10
                },
                "sonuc_metni": "Cenevizliler rotalarını başka limanlara çevirdi."
            }
        ]
    },
    {
        "id": "evt_33",
        "elci": "hazine",
        "baslik": "Sahte Sikkeler",
        "metin": "Piyasada sahte altın sikkeler dolaşıyor. Tüccarlar panikte.",
        "secenekler": [
            {
                "metin": "Tüm sikkeleri toplatıp yeniden bastırın.",
                "etkiler": {
                    "halk": 10,
                    "gelir": -20,
                    "din": 5
                },
                "sonuc_metni": "Güven sağlandı ama darphanenin masrafı belimizi büktü."
            },
            {
                "metin": "Kalpazanları bulana ödül vaat edin.",
                "etkiler": {
                    "halk": -10,
                    "gelir": -5,
                    "asker": 5
                },
                "sonuc_metni": "Kalpazanlar yakalanamadı, enflasyon arttı."
            }
        ]
    },
    {
        "id": "evt_34",
        "elci": "hazine",
        "baslik": "Gümüş Madeni",
        "metin": "Balkanlarda yeni ve zengin bir gümüş madeni keşfedildi. İşletmesini kime verelim?",
        "secenekler": [
            {
                "metin": "Devlet işletsin, tüm gelir hazineye gelsin.",
                "etkiler": {
                    "gelir": 20,
                    "asker": -5
                },
                "sonuc_metni": "Maden verimli çalışıyor, hazineye sıcak para giriyor."
            },
            {
                "metin": "Yabancı bir şirkete kiralayalım, peşin para alalım.",
                "etkiler": {
                    "halk": -10,
                    "gelir": 30,
                    "asker": -5,
                    "din": -10
                },
                "sonuc_metni": "Peşin para rahatlattı ama uzun vadede zarar ettik."
            }
        ]
    },
    {
        "id": "evt_35",
        "elci": "hazine",
        "baslik": "Kuraklık ve Tohum",
        "metin": "Hasat bu yıl çok kötü geçti. Çiftçiler tohumluk buğday alamıyor.",
        "secenekler": [
            {
                "metin": "Köylülere hazineden faizsiz borç verin.",
                "etkiler": {
                    "halk": 20,
                    "gelir": -15,
                    "din": 5
                },
                "sonuc_metni": "Köylü tarlasını ekebildi, dualar seninle."
            },
            {
                "metin": "Hazine boş, başlarının çaresine baksınlar.",
                "etkiler": {
                    "halk": -25,
                    "asker": -5,
                    "gelir": 5
                },
                "sonuc_metni": "Köyden kente göç başladı, tarlalar boş kaldı."
            }
        ]
    },
    {
        "id": "evt_36",
        "elci": "hazine",
        "baslik": "Saray İhtişamı",
        "metin": "Sarayın ihtişamı için yurtdışından pahalı ipekler ve aynalar sipariş edilmiş. Ödeyelim mi?",
        "secenekler": [
            {
                "metin": "İtibarımız için şart, ödeyin.",
                "etkiler": {
                    "halk": -10,
                    "gelir": -15,
                    "din": -5
                },
                "sonuc_metni": "Saray göz kamaştırıyor ama halk aç."
            },
            {
                "metin": "Siparişi iptal edin, yerli malı kullanın.",
                "etkiler": {
                    "halk": 15,
                    "gelir": 5,
                    "din": 5
                },
                "sonuc_metni": "Yerli esnaf sevindi, hazineden para çıkmadı."
            }
        ]
    },
    {
        "id": "evt_37",
        "elci": "hazine",
        "baslik": "Korsan Zararları",
        "metin": "Akdeniz'de korsanlar ticaret gemilerimize el koydu, tüccarlar zarar tazmini istiyor.",
        "secenekler": [
            {
                "metin": "Zararlarını hazineden karşıla.",
                "etkiler": {
                    "halk": 5,
                    "gelir": -20
                },
                "sonuc_metni": "Tüccarlar batmaktan kurtuldu."
            },
            {
                "metin": "Güvenliklerini kendileri sağlasaydı, ödemiyoruz.",
                "etkiler": {
                    "halk": -15,
                    "din": -5,
                    "gelir": 5
                },
                "sonuc_metni": "Birçok tüccar iflas etti, ticaret geriledi."
            }
        ]
    },
    {
        "id": "evt_38",
        "elci": "hazine",
        "baslik": "Tağşiş Kararı",
        "metin": "Memurların maaşlarını ödeyecek para kalmadı. Paranın içine bakır karıştırıp öyle mi ödeyelim?",
        "secenekler": [
            {
                "metin": "Mecburuz, ayarını düşürün.",
                "etkiler": {
                    "halk": -15,
                    "gelir": 20,
                    "asker": -10,
                    "din": -10
                },
                "sonuc_metni": "Maaşlar ödendi ama paranın değeri çakıldı."
            },
            {
                "metin": "Hayır, gerekirse kendi mallarımı satıp ödeyeceğim.",
                "etkiler": {
                    "halk": 20,
                    "gelir": -10,
                    "asker": 10,
                    "din": 10
                },
                "sonuc_metni": "Fedakarlığın herkesi duygulandırdı."
            }
        ]
    },
    {
        "id": "evt_39",
        "elci": "hazine",
        "baslik": "İpek Yolu Vergisi",
        "metin": "İpek yolundan geçen kervanların geçiş ücretlerini artıralım mı?",
        "secenekler": [
            {
                "metin": "Evet, hazineye daha çok altın lazım.",
                "etkiler": {
                    "gelir": 20,
                    "din": -10,
                    "halk": -5
                },
                "sonuc_metni": "Kısa vadede büyük kazanç sağlandı ama tüccarlar kızgın."
            },
            {
                "metin": "Aksine, cazip olması için indirelim.",
                "etkiler": {
                    "gelir": -15,
                    "halk": 10,
                    "asker": 5
                },
                "sonuc_metni": "Uzun vadede ticaret canlansa da hazine şimdilik zorda."
            }
        ]
    },
    {
        "id": "evt_40",
        "elci": "hazine",
        "baslik": "Zengin Tüccar Mirası",
        "metin": "Ölen çok zengin ve varissiz bir tüccarın mallarına devlet el koysun mu?",
        "secenekler": [
            {
                "metin": "Elbette, hepsi hazineye kalmalı.",
                "etkiler": {
                    "gelir": 15,
                    "halk": -10,
                    "din": -5
                },
                "sonuc_metni": "Hazine doldu ama halk tedirgin."
            },
            {
                "metin": "Sadece onda birini al, kalanını vakfet.",
                "etkiler": {
                    "gelir": -5,
                    "din": 20,
                    "halk": 10
                },
                "sonuc_metni": "Ulema ve halk bu adil davranışı çok sevdi."
            }
        ]
    },
    {
        "id": "evt_41",
        "elci": "hazine",
        "baslik": "Dış Borç",
        "metin": "Savaş masrafları için Avrupalı bankerlerden borç almayı öneriyorum.",
        "secenekler": [
            {
                "metin": "Kabul et, orduyu güçlendirmeliyiz.",
                "etkiler": {
                    "gelir": 25,
                    "asker": 15,
                    "din": -20,
                    "halk": -10
                },
                "sonuc_metni": "Ordu donatıldı ama faiz ödemeleri belimizi bükecek."
            },
            {
                "metin": "Kafirlerden borç almayız, neyimiz varsa o.",
                "etkiler": {
                    "gelir": -15,
                    "asker": -15,
                    "din": 15
                },
                "sonuc_metni": "Bağımsızlığımızı koruduk ama ekonomik sıkıntı devam ediyor."
            }
        ]
    },
    {
        "id": "evt_42",
        "elci": "hazine",
        "baslik": "Gümrük Kaçakçılığı",
        "metin": "Gümrük memurlarının rüşvet alarak malları vergisiz geçirdiği tespit edildi.",
        "secenekler": [
            {
                "metin": "Sert cezalar ver ve vergileri zorla topla.",
                "etkiler": {
                    "gelir": 15,
                    "halk": -15,
                    "asker": 5
                },
                "sonuc_metni": "Kaçakçılık azaldı ama memurlar huzursuz."
            },
            {
                "metin": "Sistemi iyileştir, memurların maaşını artır.",
                "etkiler": {
                    "gelir": -10,
                    "halk": 10,
                    "din": 5
                },
                "sonuc_metni": "Uzun vadede sistem düzeldi."
            }
        ]
    },
    {
        "id": "evt_43",
        "elci": "hazine",
        "baslik": "Vakıf Arazileri",
        "metin": "Bazı vakıf arazileri boş duruyor, bunları hazineye katıp vergilendirelim mi?",
        "secenekler": [
            {
                "metin": "Evet, atıl duracaklarına devletin olsun.",
                "etkiler": {
                    "gelir": 15,
                    "din": -25,
                    "halk": -10
                },
                "sonuc_metni": "Hazineye kaynak yaratıldı ama ulema kıyameti kopardı."
            },
            {
                "metin": "Vakıf mallarına dokunulmaz, oldukları gibi kalsınlar.",
                "etkiler": {
                    "gelir": -10,
                    "din": 15
                },
                "sonuc_metni": "Din adamları memnun, bütçe açığı sürüyor."
            }
        ]
    },
    {
        "id": "evt_44",
        "elci": "hazine",
        "baslik": "Esnaf Loncaları",
        "metin": "Loncalar dışarıdan mal gelmesini yasaklamak istiyor, aksi halde kepenk kapatacaklar.",
        "secenekler": [
            {
                "metin": "Loncaları koru, ithalatı yasakla.",
                "etkiler": {
                    "halk": 15,
                    "gelir": -15,
                    "din": 5
                },
                "sonuc_metni": "Yerli esnaf korundu ama ürün kalitesi düştü, gümrük geliri azaldı."
            },
            {
                "metin": "Serbest ticareti destekle, rekabet etsinler.",
                "etkiler": {
                    "halk": -15,
                    "gelir": 20,
                    "asker": 5
                },
                "sonuc_metni": "Esnaf battı ama piyasa ucuz mallarla doldu, gümrük geliri arttı."
            }
        ]
    },
    {
        "id": "evt_45",
        "elci": "hazine",
        "baslik": "Yeni Altın Madeni",
        "metin": "Afrika'daki dost bir krallıktan altın madeni işletme hakkı aldık.",
        "secenekler": [
            {
                "metin": "Büyük bir filo ile oraya işçi yolla.",
                "etkiler": {
                    "gelir": 25,
                    "asker": -15,
                    "halk": -5
                },
                "sonuc_metni": "Altınlar akmaya başladı ama filo uzun süre eksik kalacak."
            },
            {
                "metin": "Bu çok masraflı, hakkı başkasına sat.",
                "etkiler": {
                    "gelir": 10,
                    "din": -5
                },
                "sonuc_metni": "Az riskle küçük bir miktar para kazandık."
            }
        ]
    }
];