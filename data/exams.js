// PhysiHub — dữ liệu đề ôn. Sửa trực tiếp trong tệp này (không còn exams.json nguồn).
window.PH = window.PH || {};
PH.EXAMS = [
  {
    "id": "c1",
    "chapter": 1,
    "title": { "vi": "Đề ôn Chương I · Vật lí nhiệt", "en": "Chapter I practice · Thermal physics" },
    "minutes": 20,
    "parts": [
      { "kind": "mcq", "points": 0.25,
        "items": [
          { "id": "c1-m1", "lesson": 1,
            "q": { "vi": "Theo mô hình động học phân tử về cấu tạo chất, phát biểu nào sau đây về chất ở thể lỏng là đúng?",
                   "en": "According to the kinetic molecular model of matter, which statement about a substance in the liquid state is correct?" },
            "options": [
              { "vi": "Các phân tử ở rất xa nhau, lực tương tác giữa chúng không đáng kể nên chất lỏng dễ bị nén.", "en": "The molecules are very far apart and the forces between them are negligible, so a liquid is easily compressed." },
              { "vi": "Các phân tử chỉ dao động quanh các vị trí cân bằng cố định nên chất lỏng có hình dạng xác định.", "en": "The molecules only vibrate about fixed equilibrium positions, so a liquid has a definite shape." },
              { "vi": "Các phân tử ở gần nhau, dao động quanh các vị trí cân bằng có thể dịch chuyển, nên chất lỏng có thể tích xác định nhưng không có hình dạng xác định.", "en": "The molecules are close together and vibrate about equilibrium positions that can move, so a liquid has a definite volume but no definite shape." },
              { "vi": "Chất lỏng không có thể tích xác định và luôn chiếm toàn bộ thể tích bình chứa.", "en": "A liquid has no definite volume and always fills the whole of its container." }
            ],
            "correct": 2,
            "why": { "vi": "Ở thể lỏng, khoảng cách giữa các phân tử cỡ kích thước phân tử; lực tương tác đủ mạnh để giữ các phân tử ở gần nhau nhưng không đủ để giữ chúng ở những vị trí cố định, nên các phân tử dao động quanh các vị trí cân bằng luôn dịch chuyển. Vì vậy chất lỏng có thể tích xác định, khó nén, nhưng có hình dạng của phần bình chứa nó. Phương án A mô tả chất khí, phương án B mô tả chất rắn, phương án D sai với chất lỏng.",
                     "en": "In a liquid the distance between molecules is about the size of a molecule; the intermolecular forces are strong enough to keep the molecules close together but not strong enough to hold them in fixed positions, so they vibrate about equilibrium positions that keep moving. A liquid therefore has a definite volume and is hard to compress, but takes the shape of its container. Option A describes a gas, option B describes a solid, and option D is false for a liquid." } },

          { "id": "c1-m2", "lesson": 1,
            "q": { "vi": "Quá trình chuyển từ thể lỏng sang thể khí xảy ra đồng thời ở mặt thoáng và trong lòng khối chất lỏng, tại một nhiệt độ xác định ứng với áp suất đã cho, được gọi là",
                   "en": "The change from the liquid to the gaseous state that takes place both at the free surface and inside the bulk of the liquid, at a definite temperature for a given pressure, is called" },
            "options": [
              { "vi": "sự bay hơi.", "en": "evaporation." },
              { "vi": "sự sôi.", "en": "boiling." },
              { "vi": "sự ngưng tụ.", "en": "condensation." },
              { "vi": "sự nóng chảy.", "en": "melting." }
            ],
            "correct": 1,
            "why": { "vi": "Sự hoá hơi có hai hình thức: bay hơi (chỉ xảy ra ở mặt thoáng, ở mọi nhiệt độ) và sôi (xảy ra cả ở mặt thoáng lẫn trong lòng chất lỏng dưới dạng các bọt hơi, ở nhiệt độ sôi xác định). Ngưng tụ là quá trình ngược lại (khí → lỏng), còn nóng chảy là quá trình rắn → lỏng.",
                     "en": "Vaporisation takes two forms: evaporation (only at the free surface, at any temperature) and boiling (at the surface and throughout the liquid, as vapour bubbles, at a definite boiling temperature). Condensation is the reverse process (gas → liquid) and melting is the solid → liquid change." } },

          { "id": "c1-m3", "lesson": 2,
            "q": { "vi": "Phát biểu nào sau đây về nội năng của một vật là đúng?",
                   "en": "Which of the following statements about the internal energy of a body is correct?" },
            "options": [
              { "vi": "Nội năng của vật là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.", "en": "The internal energy of a body is the sum of the kinetic energies and the interaction potential energies of the molecules that make up the body." },
              { "vi": "Nội năng của vật chỉ có thể thay đổi bằng cách truyền nhiệt cho vật.", "en": "The internal energy of a body can only be changed by transferring heat to it." },
              { "vi": "Nội năng của vật không phụ thuộc vào nhiệt độ của vật.", "en": "The internal energy of a body does not depend on its temperature." },
              { "vi": "Trong hệ SI, nội năng có đơn vị là oát (W).", "en": "In SI units, internal energy is measured in watts (W)." }
            ],
            "correct": 0,
            "why": { "vi": "Nội năng U là tổng động năng và thế năng của các phân tử cấu tạo nên vật; nó phụ thuộc vào nhiệt độ và thể tích của vật và có đơn vị là jun (J). Có hai cách làm thay đổi nội năng là thực hiện công và truyền nhiệt, nên B sai; C sai vì nhiệt độ tăng thì động năng phân tử tăng; D sai vì oát là đơn vị của công suất.",
                     "en": "Internal energy U is the total kinetic and potential energy of the molecules of a body; it depends on the temperature and volume of the body and is measured in joules (J). Internal energy can be changed in two ways, by doing work and by heat transfer, so B is wrong; C is wrong because raising the temperature raises the molecular kinetic energy; D is wrong because the watt is the unit of power." } },

          { "id": "c1-m4", "lesson": 3,
            "q": { "vi": "Nhiệt độ sôi của nitơ lỏng ở áp suất tiêu chuẩn là −196°C. Lấy T (K) = t (°C) + 273. Trong thang nhiệt độ Kelvin, nhiệt độ này bằng",
                   "en": "The boiling point of liquid nitrogen at standard pressure is −196°C. Take T (K) = t (°C) + 273. On the Kelvin scale this temperature is" },
            "options": [
              { "vi": "469 K.", "en": "469 K." },
              { "vi": "−77 K.", "en": "−77 K." },
              { "vi": "196 K.", "en": "196 K." },
              { "vi": "77 K.", "en": "77 K." }
            ],
            "correct": 3,
            "why": { "vi": "T = t + 273 = −196 + 273 = 77 K. Thang Kelvin không có nhiệt độ âm: 0 K là nhiệt độ không tuyệt đối, ở đó động năng chuyển động nhiệt của các phân tử là nhỏ nhất.",
                     "en": "T = t + 273 = −196 + 273 = 77 K. There are no negative temperatures on the Kelvin scale: 0 K is absolute zero, at which the thermal kinetic energy of the molecules is at its minimum." } },

          { "id": "c1-m5", "lesson": 5,
            "q": { "vi": "Nhiệt nóng chảy riêng λ của một chất là",
                   "en": "The specific latent heat of fusion λ of a substance is" },
            "options": [
              { "vi": "nhiệt lượng cần cung cấp để 1 kg chất đó tăng thêm 1 K.", "en": "the heat required to raise the temperature of 1 kg of the substance by 1 K." },
              { "vi": "nhiệt lượng cần cung cấp để 1 kg chất đó ở thể lỏng hoá hơi hoàn toàn ở nhiệt độ sôi.", "en": "the heat required to completely vaporise 1 kg of the substance in the liquid state at its boiling temperature." },
              { "vi": "nhiệt lượng cần cung cấp để 1 kg chất đó ở thể rắn nóng chảy hoàn toàn ở nhiệt độ nóng chảy.", "en": "the heat required to completely melt 1 kg of the substance in the solid state at its melting temperature." },
              { "vi": "nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn một vật rắn bất kì làm bằng chất đó.", "en": "the heat required to completely melt any solid object made of the substance." }
            ],
            "correct": 2,
            "why": { "vi": "Theo định nghĩa (SGK Bài 5), nhiệt nóng chảy riêng λ (J/kg) là nhiệt lượng cần truyền cho 1 kg chất rắn để nó chuyển hoàn toàn sang thể lỏng ở nhiệt độ nóng chảy: Q = λm. Phương án A là nhiệt dung riêng c, phương án B là nhiệt hoá hơi riêng L, phương án D không tính cho 1 kg nên không phải đại lượng ‘riêng’.",
                     "en": "By definition (textbook Lesson 5), the specific latent heat of fusion λ (J/kg) is the heat that must be supplied to 1 kg of a solid to turn it completely into liquid at its melting temperature: Q = λm. Option A is the specific heat capacity c, option B is the specific latent heat of vaporisation L, and option D is not per kilogram, so it is not a ‘specific’ quantity." } },

          { "id": "c1-m6", "lesson": 6,
            "q": { "vi": "Nhiệt hoá hơi riêng của nước ở 100°C là L = 2,3·10⁶ J/kg. Nhiệt lượng cần cung cấp để 200 g nước ở 100°C hoá hơi hoàn toàn là",
                   "en": "The specific latent heat of vaporisation of water at 100°C is L = 2.3×10⁶ J/kg. The heat required to completely vaporise 200 g of water at 100°C is" },
            "options": [
              { "vi": "4,6·10⁶ J.", "en": "4.6×10⁶ J." },
              { "vi": "4,6·10⁵ J.", "en": "4.6×10⁵ J." },
              { "vi": "1,15·10⁷ J.", "en": "1.15×10⁷ J." },
              { "vi": "2,3·10⁵ J.", "en": "2.3×10⁵ J." }
            ],
            "correct": 1,
            "why": { "vi": "Đổi 200 g = 0,2 kg. Q = Lm = 2,3·10⁶ × 0,2 = 4,6·10⁵ J = 460 kJ. Phương án A lớn gấp 10 lần (lấy nhầm m = 2 kg), phương án C chia thay vì nhân, phương án D ứng với 100 g.",
                     "en": "Convert 200 g = 0.2 kg. Q = Lm = 2.3×10⁶ × 0.2 = 4.6×10⁵ J = 460 kJ. Option A is ten times too large (m mistaken as 2 kg), option C divides instead of multiplying, option D corresponds to 100 g." } }
        ] },

      { "kind": "tf",
        "items": [
          { "id": "c1-t1", "lesson": 3,
            "stem": { "vi": "Khi nói về mô hình động học phân tử của chất, nhiệt độ và nội năng, xét tính đúng/sai của các phát biểu sau:",
                      "en": "Concerning the kinetic molecular model of matter, temperature and internal energy, decide whether each statement is true or false:" },
            "statements": [
              { "vi": "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động nhiệt càng nhanh và nội năng của vật càng lớn.", "en": "The higher the temperature of a body, the faster the thermal motion of its molecules and the greater its internal energy.", "answer": true },
              { "vi": "Khi hai vật có nhiệt độ khác nhau tiếp xúc nhau, nhiệt lượng tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn cho đến khi đạt cân bằng nhiệt.", "en": "When two bodies at different temperatures are in contact, heat flows spontaneously from the hotter body to the colder one until thermal equilibrium is reached.", "answer": true },
              { "vi": "Nội năng của một khối khí lí tưởng xác định chỉ phụ thuộc vào nhiệt độ tuyệt đối của khối khí đó.", "en": "The internal energy of a fixed amount of ideal gas depends only on its absolute temperature.", "answer": true },
              { "vi": "Nếu nhiệt độ của một chất lỏng tăng thêm 15°C thì trong thang nhiệt độ Kelvin, nhiệt độ của nó tăng thêm 288 K.", "en": "If the temperature of a liquid rises by 15°C, then on the Kelvin scale its temperature rises by 288 K.", "answer": false }
            ],
            "why": { "vi": "a) Đúng, b) Đúng: đây là nội dung cơ bản của mô hình động học phân tử và của sự truyền nhiệt. c) Đúng: khí lí tưởng bỏ qua thế năng tương tác giữa các phân tử nên nội năng chỉ gồm động năng phân tử, tức chỉ phụ thuộc nhiệt độ. d) Sai: độ chia của thang Kelvin bằng độ chia của thang Celsius nên độ tăng nhiệt độ là ΔT = Δt = 15 K. Chỉ cộng 273 khi đổi một giá trị nhiệt độ (T = t + 273), không cộng cho độ biến thiên nhiệt độ.",
                     "en": "a) True, b) True: these are basic results of the kinetic molecular model and of heat transfer. c) True: an ideal gas has no intermolecular potential energy, so its internal energy is the molecular kinetic energy alone and depends only on temperature. d) False: a kelvin and a Celsius degree are the same size, so the temperature change is ΔT = Δt = 15 K. The 273 is added only when converting a temperature value (T = t + 273), not a temperature change." } },

          { "id": "c1-t2", "lesson": 5,
            "stem": { "vi": "Một khối nước đá có khối lượng 2,0 kg ở 0°C được cung cấp nhiệt để nóng chảy hoàn toàn, sau đó lượng nước thu được tiếp tục được đun nóng. Cho nhiệt nóng chảy riêng của nước đá λ = 3,4·10⁵ J/kg và nhiệt dung riêng của nước c = 4200 J/(kg·K).",
                      "en": "A 2.0 kg block of ice at 0°C is supplied with heat until it has completely melted, and the water obtained is then heated further. Take the specific latent heat of fusion of ice λ = 3.4×10⁵ J/kg and the specific heat capacity of water c = 4200 J/(kg·K)." },
            "statements": [
              { "vi": "Trong suốt quá trình nóng chảy, nhiệt độ của nước đá giữ nguyên ở 0°C dù vẫn nhận nhiệt.", "en": "Throughout the melting process the temperature of the ice stays at 0°C even though it keeps receiving heat.", "answer": true },
              { "vi": "Nhiệt lượng cần cung cấp để khối nước đá nóng chảy hoàn toàn là 6,8·10⁵ J.", "en": "The heat required to melt the block of ice completely is 6.8×10⁵ J.", "answer": true },
              { "vi": "Nhiệt lượng nhận được trong quá trình nóng chảy chủ yếu làm tăng động năng chuyển động nhiệt của các phân tử nước.", "en": "The heat received during melting mainly increases the kinetic energy of thermal motion of the water molecules.", "answer": false },
              { "vi": "Sau khi nóng chảy hết, để đun 2,0 kg nước từ 0°C lên 20°C cần cung cấp nhiệt lượng 84 kJ.", "en": "After all the ice has melted, heating the 2.0 kg of water from 0°C to 20°C requires 84 kJ of heat.", "answer": false }
            ],
            "why": { "vi": "a) Đúng: trong quá trình chuyển thể, nhiệt độ của chất không đổi. b) Đúng: Q = λm = 3,4·10⁵ × 2,0 = 6,8·10⁵ J. c) Sai: vì nhiệt độ không đổi nên động năng phân tử không đổi; nhiệt lượng nhận được dùng để phá vỡ liên kết trong mạng tinh thể, tức làm tăng thế năng tương tác giữa các phân tử. d) Sai: Q = mcΔT = 2,0 × 4200 × 20 = 168 000 J = 168 kJ, gấp đôi 84 kJ.",
                     "en": "a) True: during a change of state the temperature stays constant. b) True: Q = λm = 3.4×10⁵ × 2.0 = 6.8×10⁵ J. c) False: since the temperature is constant, the molecular kinetic energy does not change; the heat received breaks the bonds of the crystal lattice, i.e. it increases the intermolecular potential energy. d) False: Q = mcΔT = 2.0 × 4200 × 20 = 168 000 J = 168 kJ, twice 84 kJ." } }
        ] },

      { "kind": "short", "points": 0.25,
        "items": [
          { "id": "c1-s1", "lesson": 4,
            "q": { "vi": "Một bình đun nước siêu tốc chứa 0,5 kg nước ở nhiệt độ ban đầu 25°C. Người ta bật ấm để đun nước lên đến 85°C. Biết nhiệt dung riêng của nước là c = 4200 J/(kg·K); bỏ qua nhiệt lượng làm nóng vỏ ấm và nhiệt lượng toả ra môi trường. Nhiệt lượng cần cung cấp cho khối nước bằng bao nhiêu kilôjun (kJ)?",
                   "en": "An electric kettle contains 0.5 kg of water at an initial temperature of 25°C. The kettle is switched on and heats the water to 85°C. The specific heat capacity of water is c = 4200 J/(kg·K); ignore the heat absorbed by the kettle body and the heat lost to the surroundings. How much heat, in kilojoules (kJ), must be supplied to the water?" },
            "answer": 126, "tolerance": 0.5, "unit": "kJ",
            "solution": { "vi": "Độ tăng nhiệt độ: ΔT = 85 − 25 = 60°C = 60 K. Nhiệt lượng: Q = mcΔT = 0,5 × 4200 × 60 = 126 000 J = 126 kJ. Điền vào phiếu: 126.",
                          "en": "Temperature rise: ΔT = 85 − 25 = 60°C = 60 K. Heat: Q = mcΔT = 0.5 × 4200 × 60 = 126 000 J = 126 kJ. Answer sheet: 126." } },

          { "id": "c1-s2", "lesson": 2,
            "q": { "vi": "Một lượng khí trong xilanh bị nén, nhận công 300 J từ bên ngoài, đồng thời truyền ra môi trường nhiệt lượng 100 J. Độ biến thiên nội năng của lượng khí bằng bao nhiêu jun (J)?",
                   "en": "A gas in a cylinder is compressed, receiving 300 J of work from the surroundings, while at the same time giving 100 J of heat to the surroundings. What is the change in the internal energy of the gas, in joules (J)?" },
            "answer": 200, "tolerance": 0.5, "unit": "J",
            "solution": { "vi": "Theo định luật I của nhiệt động lực học: ΔU = A + Q. Khí nhận công nên A = +300 J; khí toả nhiệt nên Q = −100 J. ΔU = 300 + (−100) = 200 J: nội năng của khí tăng 200 J. Điền: 200.",
                          "en": "First law of thermodynamics: ΔU = A + Q. The gas receives work, so A = +300 J; the gas gives out heat, so Q = −100 J. ΔU = 300 + (−100) = 200 J: the internal energy increases by 200 J. Answer: 200." } }
        ] }
    ]
  },

  {
    "id": "c2",
    "chapter": 2,
    "title": { "vi": "Đề ôn Chương II · Khí lí tưởng", "en": "Chapter II practice · Ideal gases" },
    "minutes": 20,
    "parts": [
      { "kind": "mcq", "points": 0.25,
        "items": [
          { "id": "c2-m1", "lesson": 8,
            "q": { "vi": "Theo thuyết động học phân tử chất khí lí tưởng, phát biểu nào sau đây về chuyển động và tương tác của các phân tử là không chính xác?",
                   "en": "According to the kinetic theory of an ideal gas, which of the following statements about the motion and interaction of gas molecules is incorrect?" },
            "options": [
              { "vi": "Các phân tử khí chuyển động hỗn loạn không ngừng; nhiệt độ càng cao thì chuyển động nhiệt càng nhanh.", "en": "Gas molecules move randomly and ceaselessly; the higher the temperature, the faster their thermal motion." },
              { "vi": "Lực tương tác giữa các phân tử khí rất mạnh khi chúng ở xa nhau và giảm dần về không khi chúng lại gần nhau.", "en": "The forces between gas molecules are very strong when the molecules are far apart and decrease to zero as they come close together." },
              { "vi": "Kích thước của các phân tử chất khí là rất nhỏ so với khoảng cách trung bình giữa các phân tử đó.", "en": "The size of a gas molecule is very small compared with the average distance between the molecules." },
              { "vi": "Khi va chạm vào thành bình chứa, các phân tử khí tác dụng lực lên thành bình và gây ra áp suất.", "en": "When they collide with the container walls, gas molecules exert forces on the walls and so produce pressure." }
            ],
            "correct": 1,
            "why": { "vi": "Theo mô hình khí lí tưởng, ở khoảng cách trung bình giữa các phân tử (khi ở xa nhau) lực tương tác phân tử rất nhỏ, coi như bằng không; các phân tử chỉ tương tác khi va chạm trực tiếp với nhau hoặc với thành bình. Do đó khẳng định B ‘lực tương tác rất mạnh khi ở xa nhau’ là sai. Các phát biểu A, C, D đều là nội dung của thuyết động học phân tử chất khí (SGK Bài 8).",
                     "en": "In the ideal-gas model the intermolecular forces at the average separation (when the molecules are far apart) are very small and taken as zero; the molecules interact only when they collide directly with one another or with the container walls. Statement B, ‘the forces are very strong when the molecules are far apart’, is therefore wrong. Statements A, C and D are all part of the kinetic theory of gases (textbook Lesson 8)." } },

          { "id": "c2-m2", "lesson": 9,
            "q": { "vi": "Một lượng khí xác định được nén đẳng nhiệt từ thể tích 6,0 lít xuống 2,0 lít. Áp suất ban đầu của khí là 1,0·10⁵ Pa. Áp suất của khí sau khi nén là",
                   "en": "A fixed mass of gas is compressed isothermally from a volume of 6.0 L to 2.0 L. The initial pressure of the gas is 1.0×10⁵ Pa. The pressure of the gas after compression is" },
            "options": [
              { "vi": "0,33·10⁵ Pa.", "en": "0.33×10⁵ Pa." },
              { "vi": "2,0·10⁵ Pa.", "en": "2.0×10⁵ Pa." },
              { "vi": "3,0·10⁵ Pa.", "en": "3.0×10⁵ Pa." },
              { "vi": "12·10⁵ Pa.", "en": "12×10⁵ Pa." }
            ],
            "correct": 2,
            "why": { "vi": "Quá trình đẳng nhiệt tuân theo định luật Boyle: p₁V₁ = p₂V₂ ⇒ p₂ = p₁V₁/V₂ = 1,0·10⁵ × 6,0/2,0 = 3,0·10⁵ Pa. Thể tích giảm 3 lần thì áp suất tăng 3 lần.",
                     "en": "An isothermal process obeys Boyle's law: p₁V₁ = p₂V₂ ⇒ p₂ = p₁V₁/V₂ = 1.0×10⁵ × 6.0/2.0 = 3.0×10⁵ Pa. The volume falls to one third, so the pressure triples." } },

          { "id": "c2-m3", "lesson": 10,
            "q": { "vi": "Một lượng khí có thể tích 2,0 lít ở 27°C được đun nóng đẳng áp đến 177°C. Thể tích của khí khi đó là",
                   "en": "A fixed mass of gas occupying 2.0 L at 27°C is heated at constant pressure to 177°C. Its volume is then" },
            "options": [
              { "vi": "3,0 lít.", "en": "3.0 L." },
              { "vi": "13 lít.", "en": "13 L." },
              { "vi": "1,3 lít.", "en": "1.3 L." },
              { "vi": "6,0 lít.", "en": "6.0 L." }
            ],
            "correct": 0,
            "why": { "vi": "Định luật Charles: V/T = const với T là nhiệt độ tuyệt đối. T₁ = 27 + 273 = 300 K; T₂ = 177 + 273 = 450 K. V₂ = V₁T₂/T₁ = 2,0 × 450/300 = 3,0 lít. Nếu dùng nhầm nhiệt độ Celsius sẽ được 2,0 × 177/27 ≈ 13 lít (sai).",
                     "en": "Charles's law: V/T = const, with T the absolute temperature. T₁ = 27 + 273 = 300 K; T₂ = 177 + 273 = 450 K. V₂ = V₁T₂/T₁ = 2.0 × 450/300 = 3.0 L. Using Celsius temperatures by mistake would give 2.0 × 177/27 ≈ 13 L (wrong)." } },

          { "id": "c2-m4", "lesson": 11,
            "q": { "vi": "Một bình chứa 2,0 mol khí lí tưởng ở nhiệt độ 300 K và áp suất 2,0·10⁵ Pa. Lấy R = 8,31 J/(mol·K). Thể tích của bình xấp xỉ bằng",
                   "en": "A container holds 2.0 mol of an ideal gas at 300 K and 2.0×10⁵ Pa. Take R = 8.31 J/(mol·K). The volume of the container is approximately" },
            "options": [
              { "vi": "12,5 lít.", "en": "12.5 L." },
              { "vi": "2,5 lít.", "en": "2.5 L." },
              { "vi": "50 lít.", "en": "50 L." },
              { "vi": "25 lít.", "en": "25 L." }
            ],
            "correct": 3,
            "why": { "vi": "Phương trình trạng thái của khí lí tưởng: pV = nRT ⇒ V = nRT/p = 2,0 × 8,31 × 300/(2,0·10⁵) = 4986/200 000 ≈ 0,0249 m³ ≈ 25 lít (1 m³ = 1000 lít).",
                     "en": "Ideal-gas equation of state: pV = nRT ⇒ V = nRT/p = 2.0 × 8.31 × 300/(2.0×10⁵) = 4986/200 000 ≈ 0.0249 m³ ≈ 25 L (1 m³ = 1000 L)." } },

          { "id": "c2-m5", "lesson": 12,
            "q": { "vi": "Theo thuyết động học phân tử chất khí, động năng tịnh tiến trung bình của phân tử khí lí tưởng tỉ lệ thuận với",
                   "en": "According to the kinetic theory of gases, the average translational kinetic energy of an ideal-gas molecule is directly proportional to" },
            "options": [
              { "vi": "nhiệt độ Celsius của khí.", "en": "the Celsius temperature of the gas." },
              { "vi": "áp suất của khí.", "en": "the pressure of the gas." },
              { "vi": "thể tích của khí.", "en": "the volume of the gas." },
              { "vi": "nhiệt độ tuyệt đối của khí.", "en": "the absolute temperature of the gas." }
            ],
            "correct": 3,
            "why": { "vi": "Động năng tịnh tiến trung bình của phân tử: Ē = (3/2)kT, với k = 1,38·10⁻²³ J/K là hằng số Boltzmann và T là nhiệt độ tuyệt đối (K). Nhiệt độ tuyệt đối là số đo động năng trung bình của các phân tử; hệ thức này không đúng nếu thay T bằng nhiệt độ Celsius.",
                     "en": "The average translational kinetic energy of a molecule is Ē = (3/2)kT, where k = 1.38×10⁻²³ J/K is the Boltzmann constant and T is the absolute temperature (K). Absolute temperature is a measure of the average molecular kinetic energy; the relation does not hold with the Celsius temperature." } },

          { "id": "c2-m6", "lesson": 12,
            "q": { "vi": "Lấy hằng số Boltzmann k = 1,38·10⁻²³ J/K. Động năng tịnh tiến trung bình của một phân tử khí lí tưởng ở 27°C là",
                   "en": "Take the Boltzmann constant k = 1.38×10⁻²³ J/K. The average translational kinetic energy of an ideal-gas molecule at 27°C is" },
            "options": [
              { "vi": "6,21·10⁻²¹ J.", "en": "6.21×10⁻²¹ J." },
              { "vi": "5,59·10⁻²² J.", "en": "5.59×10⁻²² J." },
              { "vi": "4,14·10⁻²¹ J.", "en": "4.14×10⁻²¹ J." },
              { "vi": "1,24·10⁻²⁰ J.", "en": "1.24×10⁻²⁰ J." }
            ],
            "correct": 0,
            "why": { "vi": "T = 27 + 273 = 300 K. Ē = (3/2)kT = 1,5 × 1,38·10⁻²³ × 300 = 6,21·10⁻²¹ J. Phương án B dùng nhầm nhiệt độ Celsius (27 K), phương án C thiếu hệ số 3/2, phương án D dùng nhầm hệ số 3.",
                     "en": "T = 27 + 273 = 300 K. Ē = (3/2)kT = 1.5 × 1.38×10⁻²³ × 300 = 6.21×10⁻²¹ J. Option B uses the Celsius temperature by mistake (27 K), option C omits the factor 3/2, option D uses a factor 3." } }
        ] },

      { "kind": "tf",
        "items": [
          { "id": "c2-t1", "lesson": 9,
            "stem": { "vi": "Một lượng khí xác định được nén chậm ở nhiệt độ không đổi từ thể tích 4,0 lít, áp suất 1,0·10⁵ Pa xuống thể tích 1,0 lít.",
                      "en": "A fixed mass of gas is compressed slowly at constant temperature from a volume of 4.0 L at a pressure of 1.0×10⁵ Pa to a volume of 1.0 L." },
            "statements": [
              { "vi": "Áp suất của khí sau khi nén là 4,0·10⁵ Pa.", "en": "The pressure of the gas after compression is 4.0×10⁵ Pa.", "answer": true },
              { "vi": "Trong quá trình nén, tích pV của lượng khí tăng dần.", "en": "During the compression the product pV of the gas increases steadily.", "answer": false },
              { "vi": "Trong hệ toạ độ (p, V), đường biểu diễn quá trình này là một đoạn của đường hypebol.", "en": "In (p, V) coordinates the graph of this process is part of a hyperbola.", "answer": true },
              { "vi": "Vì thể tích giảm 4 lần nên số phân tử khí trong bình giảm 4 lần.", "en": "Because the volume is reduced fourfold, the number of gas molecules in the container falls fourfold.", "answer": false }
            ],
            "why": { "vi": "a) Đúng: p₁V₁ = p₂V₂ ⇒ p₂ = 1,0·10⁵ × 4,0/1,0 = 4,0·10⁵ Pa. b) Sai: ở nhiệt độ không đổi, tích pV của lượng khí xác định là hằng số (định luật Boyle). c) Đúng: đường đẳng nhiệt trong hệ (p, V) là đường hypebol p = const/V. d) Sai: lượng khí xác định nên số phân tử không đổi; chỉ mật độ phân tử tăng 4 lần, đó chính là lí do áp suất tăng 4 lần.",
                     "en": "a) True: p₁V₁ = p₂V₂ ⇒ p₂ = 1.0×10⁵ × 4.0/1.0 = 4.0×10⁵ Pa. b) False: at constant temperature the product pV of a fixed mass of gas is constant (Boyle's law). c) True: an isotherm in (p, V) coordinates is a hyperbola p = const/V. d) False: the mass of gas is fixed, so the number of molecules is unchanged; only the number density rises fourfold, which is exactly why the pressure rises fourfold." } },

          { "id": "c2-t2", "lesson": 12,
            "stem": { "vi": "Một bình kín có thể tích không đổi chứa khí lí tưởng. Người ta nung nóng bình để nhiệt độ tuyệt đối của khí tăng gấp đôi.",
                      "en": "A sealed rigid container holds an ideal gas. The container is heated so that the absolute temperature of the gas doubles." },
            "statements": [
              { "vi": "Động năng tịnh tiến trung bình của các phân tử khí tăng gấp đôi.", "en": "The average translational kinetic energy of the gas molecules doubles.", "answer": true },
              { "vi": "Áp suất của khí trong bình tăng gấp đôi.", "en": "The pressure of the gas in the container doubles.", "answer": true },
              { "vi": "Trung bình của bình phương tốc độ phân tử (v̄²) tăng gấp 4 lần.", "en": "The mean square speed of the molecules (v̄²) increases fourfold.", "answer": false },
              { "vi": "Mật độ phân tử khí trong bình tăng gấp đôi.", "en": "The number density of gas molecules in the container doubles.", "answer": false }
            ],
            "why": { "vi": "a) Đúng: Ē = (3/2)kT tỉ lệ thuận với T. b) Đúng: thể tích không đổi nên p/T = const (từ pV/T = const); T tăng 2 lần thì p tăng 2 lần. c) Sai: (1/2)m·v̄² = (3/2)kT nên v̄² tỉ lệ thuận với T, chỉ tăng gấp đôi (tốc độ căn quân phương tăng √2 lần). d) Sai: số phân tử và thể tích bình đều không đổi nên mật độ phân tử n = N/V không đổi; áp suất tăng là do các phân tử chuyển động nhanh hơn (p = (1/3)n·m·v̄²).",
                     "en": "a) True: Ē = (3/2)kT is proportional to T. b) True: the volume is constant, so p/T = const (from pV/T = const); doubling T doubles p. c) False: (1/2)m·v̄² = (3/2)kT, so v̄² is proportional to T and only doubles (the root-mean-square speed rises by √2). d) False: neither the number of molecules nor the volume changes, so the number density n = N/V is unchanged; the pressure rises because the molecules move faster (p = (1/3)n·m·v̄²)." } }
        ] },

      { "kind": "short", "points": 0.25,
        "items": [
          { "id": "c2-s1", "lesson": 9,
            "q": { "vi": "Một lượng khí có thể tích 3,0 lít ở áp suất 2,0·10⁵ Pa được nén đẳng nhiệt đến thể tích 1,2 lít. Áp suất của khí sau khi nén bằng bao nhiêu, tính theo đơn vị 10⁵ Pa?",
                   "en": "A fixed mass of gas occupying 3.0 L at a pressure of 2.0×10⁵ Pa is compressed isothermally to a volume of 1.2 L. What is the pressure of the gas after compression, in units of 10⁵ Pa?" },
            "answer": 5, "tolerance": 0.05, "unit": "·10⁵ Pa",
            "solution": { "vi": "Định luật Boyle: p₁V₁ = p₂V₂ ⇒ p₂ = p₁V₁/V₂ = 2,0 × 3,0/1,2 = 6,0/1,2 = 5,0 (·10⁵ Pa). Điền: 5,0.",
                          "en": "Boyle's law: p₁V₁ = p₂V₂ ⇒ p₂ = p₁V₁/V₂ = 2.0 × 3.0/1.2 = 6.0/1.2 = 5.0 (×10⁵ Pa). Answer: 5.0." } },

          { "id": "c2-s2", "lesson": 11,
            "q": { "vi": "Một lượng khí lí tưởng ở trạng thái 1 có p₁ = 1,0·10⁵ Pa, V₁ = 6,0 lít, T₁ = 300 K được chuyển sang trạng thái 2 có p₂ = 2,0·10⁵ Pa, T₂ = 400 K. Thể tích V₂ của khí ở trạng thái 2 bằng bao nhiêu lít?",
                   "en": "A fixed mass of ideal gas in state 1 has p₁ = 1.0×10⁵ Pa, V₁ = 6.0 L, T₁ = 300 K and is taken to state 2 with p₂ = 2.0×10⁵ Pa, T₂ = 400 K. What is the volume V₂ of the gas in state 2, in litres?" },
            "answer": 4, "tolerance": 0.05, "unit": "L",
            "solution": { "vi": "Phương trình trạng thái: p₁V₁/T₁ = p₂V₂/T₂ ⇒ V₂ = p₁V₁T₂/(p₂T₁) = 1,0 × 6,0 × 400/(2,0 × 300) = 2400/600 = 4,0 lít. Điền: 4,0.",
                          "en": "Equation of state: p₁V₁/T₁ = p₂V₂/T₂ ⇒ V₂ = p₁V₁T₂/(p₂T₁) = 1.0 × 6.0 × 400/(2.0 × 300) = 2400/600 = 4.0 L. Answer: 4.0." } }
        ] }
    ]
  },

  {
    "id": "c3",
    "chapter": 3,
    "title": { "vi": "Đề ôn Chương III · Từ trường", "en": "Chapter III practice · Magnetic fields" },
    "minutes": 20,
    "parts": [
      { "kind": "mcq", "points": 0.25,
        "items": [
          { "id": "c3-m1", "lesson": 14,
            "q": { "vi": "Phát biểu nào sau đây về đường sức từ là sai?",
                   "en": "Which of the following statements about magnetic field lines is false?" },
            "options": [
              { "vi": "Qua mỗi điểm trong từ trường chỉ vẽ được một đường sức từ.", "en": "Only one field line can be drawn through each point in a magnetic field." },
              { "vi": "Các đường sức từ là những đường cong kín hoặc vô hạn ở hai đầu.", "en": "Magnetic field lines are closed curves or extend to infinity at both ends." },
              { "vi": "Ở bên ngoài một nam châm thẳng, các đường sức từ đi ra từ cực Nam và đi vào cực Bắc.", "en": "Outside a bar magnet, the field lines leave the south pole and enter the north pole." },
              { "vi": "Nơi từ trường mạnh hơn thì các đường sức từ được vẽ dày hơn.", "en": "Where the field is stronger, the field lines are drawn closer together." }
            ],
            "correct": 2,
            "why": { "vi": "Quy ước: ở bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (N) và đi vào cực Nam (S); trong lòng nam châm chúng đi từ S đến N, tạo thành những đường cong kín. Do đó phương án C phát biểu ngược. Các phương án A, B, D là các tính chất đúng của đường sức từ (SGK Bài 14).",
                     "en": "By convention, outside a magnet the field lines leave the north (N) pole and enter the south (S) pole; inside the magnet they run from S to N, forming closed curves. Option C states the opposite. Options A, B and D are correct properties of field lines (textbook Lesson 14)." } },

          { "id": "c3-m2", "lesson": 15,
            "q": { "vi": "Một đoạn dây dẫn thẳng dài 20 cm mang dòng điện 5,0 A đặt trong từ trường đều có cảm ứng từ B = 0,10 T, dây hợp với các đường sức từ một góc 30°. Lực từ tác dụng lên đoạn dây có độ lớn",
                   "en": "A straight conductor 20 cm long carrying a current of 5.0 A is placed in a uniform magnetic field of B = 0.10 T, making an angle of 30° with the field lines. The magnitude of the magnetic force on the conductor is" },
            "options": [
              { "vi": "0,050 N.", "en": "0.050 N." },
              { "vi": "0,10 N.", "en": "0.10 N." },
              { "vi": "0,087 N.", "en": "0.087 N." },
              { "vi": "5,0 N.", "en": "5.0 N." }
            ],
            "correct": 0,
            "why": { "vi": "F = BILsinα = 0,10 × 5,0 × 0,20 × sin30° = 0,10 × 5,0 × 0,20 × 0,5 = 0,050 N. Phương án B bỏ quên sinα, phương án C dùng nhầm cos30°, phương án D không đổi 20 cm ra mét.",
                     "en": "F = BILsinα = 0.10 × 5.0 × 0.20 × sin30° = 0.10 × 5.0 × 0.20 × 0.5 = 0.050 N. Option B omits sinα, option C uses cos30° by mistake, option D fails to convert 20 cm to metres." } },

          { "id": "c3-m3", "lesson": 15,
            "q": { "vi": "Trong hệ SI, đơn vị của cảm ứng từ là tesla (T). Từ biểu thức lực từ F = BILsinα, hệ thức nào sau đây đúng?",
                   "en": "In SI units the magnetic flux density B is measured in tesla (T). From the magnetic-force formula F = BILsinα, which of the following relations is correct?" },
            "options": [
              { "vi": "1 T = 1 N·A/m", "en": "1 T = 1 N·A/m" },
              { "vi": "1 T = 1 N/(A·m)", "en": "1 T = 1 N/(A·m)" },
              { "vi": "1 T = 1 N·m/A", "en": "1 T = 1 N·m/A" },
              { "vi": "1 T = 1 V/m", "en": "1 T = 1 V/m" }
            ],
            "correct": 1,
            "why": { "vi": "Từ F = BILsinα ⇒ B = F/(ILsinα). Với F đo bằng N, I bằng A, L bằng m thì 1 T = 1 N/(A·m): từ trường đều 1 T tác dụng lực 1 N lên mỗi mét dây dẫn mang dòng điện 1 A đặt vuông góc với đường sức từ.",
                     "en": "From F = BILsinα ⇒ B = F/(ILsinα). With F in N, I in A and L in m, 1 T = 1 N/(A·m): a uniform field of 1 T exerts a force of 1 N on each metre of a conductor carrying 1 A placed perpendicular to the field lines." } },

          { "id": "c3-m4", "lesson": 16,
            "q": { "vi": "Một khung dây phẳng có diện tích 50 cm² đặt trong từ trường đều có cảm ứng từ B = 0,20 T. Vectơ pháp tuyến của mặt phẳng khung hợp với vectơ cảm ứng từ một góc 60°. Từ thông qua khung dây là",
                   "en": "A flat coil of area 50 cm² is placed in a uniform magnetic field of B = 0.20 T. The normal to the plane of the coil makes an angle of 60° with the field. The magnetic flux through the coil is" },
            "options": [
              { "vi": "1,0·10⁻³ Wb.", "en": "1.0×10⁻³ Wb." },
              { "vi": "8,7·10⁻⁴ Wb.", "en": "8.7×10⁻⁴ Wb." },
              { "vi": "5,0 Wb.", "en": "5.0 Wb." },
              { "vi": "5,0·10⁻⁴ Wb.", "en": "5.0×10⁻⁴ Wb." }
            ],
            "correct": 3,
            "why": { "vi": "Đổi S = 50 cm² = 50·10⁻⁴ m² = 5,0·10⁻³ m². Φ = BScosα = 0,20 × 5,0·10⁻³ × cos60° = 0,20 × 5,0·10⁻³ × 0,5 = 5,0·10⁻⁴ Wb. Phương án A quên cosα, phương án B dùng nhầm sin60°, phương án C không đổi cm² sang m².",
                     "en": "Convert S = 50 cm² = 50×10⁻⁴ m² = 5.0×10⁻³ m². Φ = BScosα = 0.20 × 5.0×10⁻³ × cos60° = 0.20 × 5.0×10⁻³ × 0.5 = 5.0×10⁻⁴ Wb. Option A omits cosα, option B uses sin60°, option C does not convert cm² to m²." } },

          { "id": "c3-m5", "lesson": 16,
            "q": { "vi": "Đưa cực Bắc của một nam châm thẳng lại gần một vòng dây dẫn kín. Theo định luật Lenz, dòng điện cảm ứng xuất hiện trong vòng dây có chiều sao cho",
                   "en": "The north pole of a bar magnet is moved towards a closed loop of wire. According to Lenz's law, the induced current in the loop flows in such a direction that" },
            "options": [
              { "vi": "từ trường của nó luôn cùng chiều với từ trường của nam châm.", "en": "its magnetic field is always in the same direction as the field of the magnet." },
              { "vi": "từ trường của nó luôn ngược chiều với từ trường của nam châm, dù nam châm lại gần hay ra xa.", "en": "its magnetic field is always opposite to the field of the magnet, whether the magnet approaches or recedes." },
              { "vi": "từ trường của nó chống lại sự tăng của từ thông qua vòng dây: mặt vòng dây đối diện nam châm là mặt Bắc và vòng dây bị đẩy ra xa nam châm.", "en": "its magnetic field opposes the increase of flux through the loop: the face of the loop facing the magnet becomes a north face and the loop is pushed away from the magnet." },
              { "vi": "từ trường của nó chống lại sự giảm của từ thông qua vòng dây: vòng dây bị hút lại gần nam châm.", "en": "its magnetic field opposes the decrease of flux through the loop: the loop is attracted towards the magnet." }
            ],
            "correct": 2,
            "why": { "vi": "Khi cực Bắc lại gần, từ thông qua vòng dây tăng. Theo định luật Lenz, dòng điện cảm ứng có chiều sao cho từ trường cảm ứng chống lại sự tăng đó, tức ngược chiều với từ trường của nam châm ở mặt đối diện: mặt này trở thành mặt Bắc và đẩy cực Bắc của nam châm. Nếu nam châm ra xa thì từ thông giảm, từ trường cảm ứng lại cùng chiều với từ trường nam châm, nên A và B sai; D mô tả trường hợp nam châm ra xa.",
                     "en": "As the north pole approaches, the flux through the loop increases. By Lenz's law the induced current creates a field that opposes this increase, i.e. opposite to the magnet's field on the facing side: that face becomes a north face and repels the magnet's north pole. If the magnet moves away the flux decreases and the induced field is then in the same direction as the magnet's field, so A and B are wrong; D describes the receding magnet." } },

          { "id": "c3-m6", "lesson": 19,
            "q": { "vi": "Phát biểu nào sau đây về sóng điện từ là đúng?",
                   "en": "Which of the following statements about electromagnetic waves is correct?" },
            "options": [
              { "vi": "Sóng điện từ là sóng dọc.", "en": "Electromagnetic waves are longitudinal waves." },
              { "vi": "Trong sóng điện từ, vectơ cường độ điện trường E và vectơ cảm ứng từ B luôn vuông góc với nhau và cùng vuông góc với phương truyền sóng.", "en": "In an electromagnetic wave the electric field vector E and the magnetic field vector B are always perpendicular to each other and both perpendicular to the direction of propagation." },
              { "vi": "Sóng điện từ không truyền được trong chân không.", "en": "Electromagnetic waves cannot travel through a vacuum." },
              { "vi": "Trong chân không, sóng điện từ có tần số càng lớn thì truyền đi càng nhanh.", "en": "In a vacuum, electromagnetic waves of higher frequency travel faster." }
            ],
            "correct": 1,
            "why": { "vi": "Sóng điện từ là sóng ngang: E ⊥ B và cả hai cùng vuông góc với phương truyền sóng. Sóng điện từ truyền được trong chân không với tốc độ c = 3·10⁸ m/s như nhau đối với mọi tần số; bước sóng λ = c/f.",
                     "en": "Electromagnetic waves are transverse: E ⊥ B and both are perpendicular to the direction of travel. They propagate through a vacuum at c = 3×10⁸ m/s, the same for every frequency; the wavelength is λ = c/f." } }
        ] },

      { "kind": "tf",
        "items": [
          { "id": "c3-t1", "lesson": 17,
            "stem": { "vi": "Một khung dây dẫn phẳng gồm N = 100 vòng, diện tích mỗi vòng S = 200 cm², quay đều với tốc độ 50 vòng/s quanh một trục nằm trong mặt phẳng khung và vuông góc với các đường sức của từ trường đều có B = 0,10 T. Lấy π = 3,14.",
                      "en": "A flat coil of N = 100 turns, each of area S = 200 cm², rotates uniformly at 50 revolutions per second about an axis lying in the plane of the coil and perpendicular to the field lines of a uniform magnetic field B = 0.10 T. Take π = 3.14." },
            "statements": [
              { "vi": "Từ thông qua khung dây biến thiên tuần hoàn theo thời gian nên trong khung xuất hiện suất điện động cảm ứng xoay chiều.", "en": "The flux through the coil varies periodically with time, so an alternating induced e.m.f. appears in the coil.", "answer": true },
              { "vi": "Tần số của suất điện động cảm ứng là 100 Hz.", "en": "The frequency of the induced e.m.f. is 100 Hz.", "answer": false },
              { "vi": "Suất điện động cảm ứng cực đại trong khung xấp xỉ 62,8 V.", "en": "The maximum induced e.m.f. in the coil is approximately 62.8 V.", "answer": true },
              { "vi": "Suất điện động cảm ứng đạt giá trị cực đại tại thời điểm mặt phẳng khung vuông góc với các đường sức từ.", "en": "The induced e.m.f. is greatest at the instant when the plane of the coil is perpendicular to the field lines.", "answer": false }
            ],
            "why": { "vi": "a) Đúng: khi khung quay, góc giữa pháp tuyến khung và B thay đổi nên Φ = NBScos(ωt) biến thiên điều hoà, tạo ra suất điện động xoay chiều e = NBSω·sin(ωt). b) Sai: tần số của suất điện động bằng tần số quay của khung, f = 50 Hz. c) Đúng: E₀ = NBSω = 100 × 0,10 × 0,020 × (2π × 50) = 0,20 × 314 = 62,8 V. d) Sai: khi mặt khung vuông góc với đường sức, từ thông cực đại nhưng tốc độ biến thiên của từ thông bằng 0 nên e = 0; e cực đại khi mặt khung song song với đường sức từ.",
                     "en": "a) True: as the coil rotates, the angle between its normal and B changes, so Φ = NBScos(ωt) varies sinusoidally and produces an alternating e.m.f. e = NBSω·sin(ωt). b) False: the e.m.f. has the same frequency as the rotation, f = 50 Hz. c) True: E₀ = NBSω = 100 × 0.10 × 0.020 × (2π × 50) = 0.20 × 314 = 62.8 V. d) False: when the plane of the coil is perpendicular to the field lines the flux is maximal but its rate of change is zero, so e = 0; e is greatest when the plane of the coil is parallel to the field lines." } },

          { "id": "c3-t2", "lesson": 18,
            "stem": { "vi": "Một tấm kim loại phẳng được treo như con lắc và dao động giữa hai cực của một nam châm điện mạnh. Xét tính đúng/sai của các phát biểu sau:",
                      "en": "A flat metal plate is hung like a pendulum and swings between the poles of a strong electromagnet. Decide whether each statement is true or false:" },
            "statements": [
              { "vi": "Khi tấm kim loại chuyển động cắt các đường sức từ, trong tấm xuất hiện dòng điện cảm ứng khép kín gọi là dòng điện Foucault.", "en": "As the plate moves across the field lines, closed induced currents called eddy (Foucault) currents appear in it.", "answer": true },
              { "vi": "Dòng điện Foucault làm tấm kim loại nóng lên do tác dụng nhiệt của dòng điện.", "en": "The eddy currents heat the plate through the heating effect of electric current.", "answer": true },
              { "vi": "Theo định luật Lenz, lực từ tác dụng lên dòng điện Foucault có xu hướng làm tấm kim loại dao động mạnh hơn.", "en": "By Lenz's law, the magnetic force on the eddy currents tends to make the plate swing more strongly.", "answer": false },
              { "vi": "Nếu xẻ tấm kim loại thành nhiều rãnh hẹp, dòng điện Foucault giảm đáng kể và tấm dao động lâu tắt hơn.", "en": "If narrow slots are cut into the plate, the eddy currents are greatly reduced and the plate keeps swinging for longer.", "answer": true }
            ],
            "why": { "vi": "a) Đúng: từ thông qua các phần của tấm biến thiên nên trong khối kim loại xuất hiện dòng điện cảm ứng xoáy (dòng Foucault). b) Đúng: dòng Foucault toả nhiệt theo hiệu ứng Joule; đây là nguyên tắc của bếp từ và lò cảm ứng. c) Sai: theo định luật Lenz, dòng cảm ứng chống lại nguyên nhân sinh ra nó, nên lực từ cản chuyển động và làm tấm nhanh chóng dừng lại (ứng dụng làm phanh điện từ). d) Đúng: các rãnh cắt ngang đường đi của dòng Foucault làm điện trở tăng, dòng Foucault giảm mạnh, tác dụng hãm yếu đi.",
                     "en": "a) True: the flux through parts of the plate changes, so swirling induced currents (eddy currents) appear in the metal. b) True: eddy currents release heat by the Joule effect; this is the principle of induction hobs and induction furnaces. c) False: by Lenz's law the induced currents oppose their cause, so the magnetic force resists the motion and the plate quickly comes to rest (used in electromagnetic braking). d) True: the slots cut across the paths of the eddy currents, increasing the resistance, so the eddy currents and the braking effect become much weaker." } }
        ] },

      { "kind": "short", "points": 0.25,
        "items": [
          { "id": "c3-s1", "lesson": 15,
            "q": { "vi": "Một đoạn dây dẫn thẳng dài 0,50 m mang dòng điện 4,0 A đặt vuông góc với các đường sức của một từ trường đều. Lực từ tác dụng lên đoạn dây có độ lớn 0,60 N. Cảm ứng từ của từ trường bằng bao nhiêu tesla (T)?",
                   "en": "A straight conductor 0.50 m long carrying a current of 4.0 A is placed perpendicular to the field lines of a uniform magnetic field. The magnetic force on the conductor is 0.60 N. What is the magnetic flux density of the field, in tesla (T)?" },
            "answer": 0.3, "tolerance": 0.005, "unit": "T",
            "solution": { "vi": "F = BILsinα với α = 90° ⇒ B = F/(IL) = 0,60/(4,0 × 0,50) = 0,60/2,0 = 0,30 T. Điền: 0,3.",
                          "en": "F = BILsinα with α = 90° ⇒ B = F/(IL) = 0.60/(4.0 × 0.50) = 0.60/2.0 = 0.30 T. Answer: 0.3." } },

          { "id": "c3-s2", "lesson": 16,
            "q": { "vi": "Một khung dây dẫn kín gồm 200 vòng, diện tích mỗi vòng 20 cm², đặt sao cho mặt phẳng khung vuông góc với các đường sức của một từ trường đều. Cảm ứng từ giảm đều từ 0,50 T về 0 trong khoảng thời gian 0,10 s. Độ lớn suất điện động cảm ứng xuất hiện trong khung bằng bao nhiêu vôn (V)?",
                   "en": "A closed coil of 200 turns, each of area 20 cm², is placed with its plane perpendicular to the field lines of a uniform magnetic field. The flux density decreases uniformly from 0.50 T to zero in 0.10 s. What is the magnitude of the e.m.f. induced in the coil, in volts (V)?" },
            "answer": 2, "tolerance": 0.05, "unit": "V",
            "solution": { "vi": "Từ thông qua một vòng lúc đầu: Φ₁ = BS = 0,50 × 20·10⁻⁴ = 1,0·10⁻³ Wb; lúc sau Φ₂ = 0 nên |ΔΦ| = 1,0·10⁻³ Wb. Suất điện động: |e| = N|ΔΦ|/Δt = 200 × 1,0·10⁻³/0,10 = 2,0 V. Điền: 2,0.",
                          "en": "Initial flux through one turn: Φ₁ = BS = 0.50 × 20×10⁻⁴ = 1.0×10⁻³ Wb; final flux Φ₂ = 0, so |ΔΦ| = 1.0×10⁻³ Wb. E.m.f.: |e| = N|ΔΦ|/Δt = 200 × 1.0×10⁻³/0.10 = 2.0 V. Answer: 2.0." } }
        ] }
    ]
  },

  {
    "id": "c4",
    "chapter": 4,
    "title": { "vi": "Đề ôn Chương IV · Vật lí hạt nhân", "en": "Chapter IV practice · Nuclear physics" },
    "minutes": 20,
    "parts": [
      { "kind": "mcq", "points": 0.25,
        "items": [
          { "id": "c4-m1", "lesson": 21,
            "q": { "vi": "Hạt nhân nhôm ²⁷₁₃Al có",
                   "en": "The aluminium nucleus ²⁷₁₃Al contains" },
            "options": [
              { "vi": "13 proton và 27 neutron.", "en": "13 protons and 27 neutrons." },
              { "vi": "13 proton và 14 neutron.", "en": "13 protons and 14 neutrons." },
              { "vi": "14 proton và 13 neutron.", "en": "14 protons and 13 neutrons." },
              { "vi": "27 proton và 13 neutron.", "en": "27 protons and 13 neutrons." }
            ],
            "correct": 1,
            "why": { "vi": "Trong kí hiệu hạt nhân, số ở dưới Z = 13 là số proton (điện tích hạt nhân), số ở trên A = 27 là số khối (tổng số nuclôn). Số neutron N = A − Z = 27 − 13 = 14.",
                     "en": "In the nuclear symbol the lower number Z = 13 is the number of protons (the atomic number) and the upper number A = 27 is the mass number (total number of nucleons). Number of neutrons N = A − Z = 27 − 13 = 14." } },

          { "id": "c4-m2", "lesson": 21,
            "q": { "vi": "Các đồng vị của cùng một nguyên tố hoá học là những hạt nhân có",
                   "en": "Isotopes of the same chemical element are nuclei that have" },
            "options": [
              { "vi": "cùng số neutron nhưng khác số proton.", "en": "the same number of neutrons but different numbers of protons." },
              { "vi": "cùng số khối nhưng khác số proton.", "en": "the same mass number but different numbers of protons." },
              { "vi": "cùng số proton nhưng khác số neutron.", "en": "the same number of protons but different numbers of neutrons." },
              { "vi": "cùng số proton và cùng số neutron.", "en": "the same number of protons and the same number of neutrons." }
            ],
            "correct": 2,
            "why": { "vi": "Đồng vị là các hạt nhân có cùng số proton Z (cùng nguyên tố, cùng vị trí trong bảng tuần hoàn) nhưng khác số neutron N, do đó khác số khối A. Ví dụ: ¹₁H, ²₁H, ³₁H là ba đồng vị của hydrogen.",
                     "en": "Isotopes are nuclei with the same number of protons Z (same element, same place in the periodic table) but different numbers of neutrons N, and hence different mass numbers A. Example: ¹₁H, ²₁H and ³₁H are three isotopes of hydrogen." } },

          { "id": "c4-m3", "lesson": 22,
            "q": { "vi": "Cho khối lượng của hạt nhân ⁴₂He là 4,0015 u, của proton là 1,0073 u và của neutron là 1,0087 u. Độ hụt khối của hạt nhân ⁴₂He là",
                   "en": "The mass of the ⁴₂He nucleus is 4.0015 u, the proton mass is 1.0073 u and the neutron mass is 1.0087 u. The mass defect of the ⁴₂He nucleus is" },
            "options": [
              { "vi": "0,0305 u.", "en": "0.0305 u." },
              { "vi": "0,0290 u.", "en": "0.0290 u." },
              { "vi": "0,0610 u.", "en": "0.0610 u." },
              { "vi": "0,0015 u.", "en": "0.0015 u." }
            ],
            "correct": 0,
            "why": { "vi": "Δm = Z·mₚ + (A − Z)·mₙ − m(He) = 2 × 1,0073 + 2 × 1,0087 − 4,0015 = 2,0146 + 2,0174 − 4,0015 = 4,0320 − 4,0015 = 0,0305 u. Độ hụt khối này ứng với năng lượng liên kết E = Δm·c² = 0,0305 × 931,5 ≈ 28,4 MeV.",
                     "en": "Δm = Z·mₚ + (A − Z)·mₙ − m(He) = 2 × 1.0073 + 2 × 1.0087 − 4.0015 = 2.0146 + 2.0174 − 4.0015 = 4.0320 − 4.0015 = 0.0305 u. This mass defect corresponds to a binding energy E = Δm·c² = 0.0305 × 931.5 ≈ 28.4 MeV." } },

          { "id": "c4-m4", "lesson": 22,
            "q": { "vi": "Hạt nhân có năng lượng liên kết riêng càng lớn thì",
                   "en": "The greater the binding energy per nucleon of a nucleus," },
            "options": [
              { "vi": "càng dễ bị phân rã phóng xạ.", "en": "the more readily it undergoes radioactive decay." },
              { "vi": "có khối lượng càng lớn.", "en": "the greater its mass." },
              { "vi": "có số khối càng lớn.", "en": "the greater its mass number." },
              { "vi": "càng bền vững.", "en": "the more stable it is." }
            ],
            "correct": 3,
            "why": { "vi": "Năng lượng liên kết riêng ε = E/A (E là năng lượng liên kết) là năng lượng liên kết tính cho một nuclôn, đặc trưng cho mức độ bền vững của hạt nhân: ε càng lớn thì hạt nhân càng bền. Các hạt nhân có số khối trung bình (50 < A < 95) có ε lớn nhất, cỡ 8,8 MeV/nuclôn, nên bền vững nhất; ε không tỉ lệ với khối lượng hay số khối.",
                     "en": "The binding energy per nucleon ε = E/A (E the binding energy) measures how tightly the nucleus is bound: the larger ε, the more stable the nucleus. Nuclei of medium mass number (50 < A < 95) have the largest ε, about 8.8 MeV per nucleon, and are the most stable; ε is not proportional to the mass or the mass number." } },

          { "id": "c4-m5", "lesson": 23,
            "q": { "vi": "Trong phóng xạ β⁻, so với hạt nhân mẹ, hạt nhân con có",
                   "en": "In β⁻ decay, compared with the parent nucleus, the daughter nucleus has" },
            "options": [
              { "vi": "số khối giảm 4 và số proton giảm 2.", "en": "a mass number smaller by 4 and 2 fewer protons." },
              { "vi": "số khối không đổi và số proton tăng 1.", "en": "the same mass number and one more proton." },
              { "vi": "số khối không đổi và số proton giảm 1.", "en": "the same mass number and one fewer proton." },
              { "vi": "số khối và số proton đều không đổi.", "en": "the same mass number and the same number of protons." }
            ],
            "correct": 1,
            "why": { "vi": "Trong phóng xạ β⁻, một neutron trong hạt nhân biến thành proton, đồng thời phát ra một electron (⁰₋₁e) và một phản neutrino. Số khối A giữ nguyên, số proton tăng thêm 1 (Z → Z + 1). Ví dụ: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄. Phương án A mô tả phóng xạ α, phương án C mô tả phóng xạ β⁺, phương án D mô tả phóng xạ γ.",
                     "en": "In β⁻ decay a neutron in the nucleus turns into a proton, emitting an electron (⁰₋₁e) and an antineutrino. The mass number A is unchanged and the number of protons increases by 1 (Z → Z + 1). Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄. Option A describes α decay, option C β⁺ decay and option D γ decay." } },

          { "id": "c4-m6", "lesson": 24,
            "q": { "vi": "Phản ứng nào sau đây là phản ứng nhiệt hạch (tổng hợp hạt nhân)?",
                   "en": "Which of the following is a nuclear fusion reaction?" },
            "options": [
              { "vi": "²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n", "en": "²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n" },
              { "vi": "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He", "en": "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He" },
              { "vi": "²₁H + ³₁H → ⁴₂He + ¹₀n", "en": "²₁H + ³₁H → ⁴₂He + ¹₀n" },
              { "vi": "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄", "en": "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄" }
            ],
            "correct": 2,
            "why": { "vi": "Phản ứng nhiệt hạch là phản ứng trong đó hai hạt nhân rất nhẹ kết hợp thành hạt nhân nặng hơn, xảy ra ở nhiệt độ rất cao (hàng chục triệu độ), như phản ứng D–T ở phương án C. Phương án A là phản ứng phân hạch (hạt nhân nặng vỡ thành hai hạt nhân trung bình), phương án B là phóng xạ α, phương án D là phóng xạ β⁻.",
                     "en": "Fusion is a reaction in which two very light nuclei combine into a heavier nucleus; it occurs at extremely high temperatures (tens of millions of degrees), like the D–T reaction in option C. Option A is fission (a heavy nucleus splits into two medium nuclei), option B is α decay and option D is β⁻ decay." } }
        ] },

      { "kind": "tf",
        "items": [
          { "id": "c4-t1", "lesson": 23,
            "stem": { "vi": "Iodine-131 (¹³¹₅₃I) là chất phóng xạ β⁻ dùng trong y học, có chu kì bán rã T = 8 ngày. Một mẫu ban đầu chứa N₀ hạt nhân ¹³¹I.",
                      "en": "Iodine-131 (¹³¹₅₃I) is a β⁻ emitter used in medicine, with a half-life T = 8 days. A sample initially contains N₀ nuclei of ¹³¹I." },
            "statements": [
              { "vi": "Sau 8 ngày, số hạt nhân ¹³¹I còn lại trong mẫu là N₀/2.", "en": "After 8 days the number of ¹³¹I nuclei remaining in the sample is N₀/2.", "answer": true },
              { "vi": "Sau 16 ngày, số hạt nhân ¹³¹I đã phân rã là N₀/4.", "en": "After 16 days the number of ¹³¹I nuclei that have decayed is N₀/4.", "answer": false },
              { "vi": "Quá trình phóng xạ xảy ra tự phát, không phụ thuộc vào nhiệt độ hay áp suất của mẫu.", "en": "The radioactive decay occurs spontaneously and does not depend on the temperature or pressure of the sample.", "answer": true },
              { "vi": "Sau 24 ngày, mẫu không còn hạt nhân ¹³¹I nào.", "en": "After 24 days no ¹³¹I nuclei are left in the sample.", "answer": false }
            ],
            "why": { "vi": "Định luật phóng xạ: N = N₀·2^(−t/T). a) Đúng: t = T ⇒ N = N₀/2. b) Sai: t = 2T ⇒ còn lại N₀/4, nên số đã phân rã là N₀ − N₀/4 = 3N₀/4. c) Đúng: phóng xạ là quá trình tự phát, không điều khiển được và không chịu ảnh hưởng của các yếu tố bên ngoài như nhiệt độ, áp suất. d) Sai: t = 3T ⇒ còn lại N₀/8 hạt nhân; số hạt nhân giảm dần theo hàm mũ chứ không bằng 0 sau một số hữu hạn chu kì bán rã.",
                     "en": "Law of radioactive decay: N = N₀·2^(−t/T). a) True: t = T ⇒ N = N₀/2. b) False: t = 2T ⇒ N₀/4 remain, so the number decayed is N₀ − N₀/4 = 3N₀/4. c) True: decay is spontaneous, cannot be controlled, and is unaffected by external conditions such as temperature and pressure. d) False: t = 3T ⇒ N₀/8 nuclei remain; the number decreases exponentially and does not reach zero after a finite number of half-lives." } },

          { "id": "c4-t2", "lesson": 24,
            "stem": { "vi": "Xét phản ứng phân hạch ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n, toả ra năng lượng khoảng 200 MeV.",
                      "en": "Consider the fission reaction ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n, which releases about 200 MeV." },
            "statements": [
              { "vi": "Phản ứng tuân theo định luật bảo toàn số khối và bảo toàn điện tích.", "en": "The reaction obeys conservation of mass number and conservation of charge.", "answer": true },
              { "vi": "Tổng khối lượng nghỉ của các hạt sau phản ứng lớn hơn tổng khối lượng nghỉ của các hạt trước phản ứng.", "en": "The total rest mass of the products is greater than the total rest mass of the reactants.", "answer": false },
              { "vi": "Các neutron sinh ra có thể tiếp tục gây phân hạch các hạt nhân ²³⁵U khác, tạo thành phản ứng dây chuyền.", "en": "The neutrons produced can go on to cause fission of other ²³⁵U nuclei, giving a chain reaction.", "answer": true },
              { "vi": "Trong lò phản ứng hạt nhân, các thanh điều khiển làm bằng vật liệu hấp thụ neutron (như boron, cadmium) được dùng để khống chế phản ứng dây chuyền.", "en": "In a nuclear reactor, control rods made of neutron-absorbing material (such as boron or cadmium) are used to control the chain reaction.", "answer": true }
            ],
            "why": { "vi": "a) Đúng: tổng số khối 235 + 1 = 236 = 144 + 89 + 3; tổng điện tích 92 + 0 = 92 = 56 + 36 + 0. b) Sai: phản ứng toả năng lượng nên tổng khối lượng nghỉ sau phản ứng nhỏ hơn trước phản ứng; phần khối lượng hụt Δm chuyển thành năng lượng E = Δm·c² ≈ 200 MeV. c) Đúng: mỗi phân hạch sinh ra 2–3 neutron; nếu trung bình có ít nhất 1 neutron gây phân hạch tiếp theo thì phản ứng dây chuyền tự duy trì. d) Đúng: thanh điều khiển hấp thụ bớt neutron để giữ hệ số nhân neutron k = 1, lò hoạt động ổn định.",
                     "en": "a) True: mass numbers 235 + 1 = 236 = 144 + 89 + 3; charges 92 + 0 = 92 = 56 + 36 + 0. b) False: the reaction releases energy, so the total rest mass after the reaction is less than before; the missing mass Δm becomes energy E = Δm·c² ≈ 200 MeV. c) True: each fission releases 2–3 neutrons; if on average at least one of them causes another fission the chain reaction sustains itself. d) True: control rods absorb some of the neutrons to keep the neutron multiplication factor k = 1 so that the reactor runs steadily." } }
        ] },

      { "kind": "short", "points": 0.25,
        "items": [
          { "id": "c4-s1", "lesson": 22,
            "q": { "vi": "Độ hụt khối của hạt nhân ⁵⁶₂₆Fe là Δm = 0,5285 u. Lấy 1 u = 931,5 MeV/c². Năng lượng liên kết riêng của hạt nhân ⁵⁶₂₆Fe bằng bao nhiêu MeV/nuclôn (lấy đến một chữ số thập phân)?",
                   "en": "The mass defect of the ⁵⁶₂₆Fe nucleus is Δm = 0.5285 u. Take 1 u = 931.5 MeV/c². What is the binding energy per nucleon of ⁵⁶₂₆Fe, in MeV/nucleon (to one decimal place)?" },
            "answer": 8.8, "tolerance": 0.05, "unit": "MeV/nucleon",
            "solution": { "vi": "Năng lượng liên kết: E = Δm·c² = 0,5285 × 931,5 ≈ 492,3 MeV. Năng lượng liên kết riêng: ε = E/A = 492,3/56 ≈ 8,79 ≈ 8,8 MeV/nuclôn (thuộc loại lớn nhất trong các hạt nhân, nên sắt rất bền vững). Điền: 8,8.",
                          "en": "Binding energy: E = Δm·c² = 0.5285 × 931.5 ≈ 492.3 MeV. Binding energy per nucleon: ε = E/A = 492.3/56 ≈ 8.79 ≈ 8.8 MeV/nucleon (among the highest of all nuclei, which is why iron is so stable). Answer: 8.8." } },

          { "id": "c4-s2", "lesson": 23,
            "q": { "vi": "Technetium-99m (⁹⁹ᵐTc) dùng trong chụp xạ hình y học có chu kì bán rã 6,0 giờ. Một mẫu ban đầu chứa 32 mg ⁹⁹ᵐTc. Sau 24 giờ, khối lượng ⁹⁹ᵐTc còn lại trong mẫu bằng bao nhiêu miligam (mg)?",
                   "en": "Technetium-99m (⁹⁹ᵐTc), used in medical imaging, has a half-life of 6.0 hours. A sample initially contains 32 mg of ⁹⁹ᵐTc. How much ⁹⁹ᵐTc, in milligrams (mg), remains in the sample after 24 hours?" },
            "answer": 2, "tolerance": 0.05, "unit": "mg",
            "solution": { "vi": "Số chu kì bán rã đã trôi qua: t/T = 24/6,0 = 4. Khối lượng còn lại: m = m₀·2^(−t/T) = 32/2⁴ = 32/16 = 2,0 mg. Điền: 2,0.",
                          "en": "Number of half-lives elapsed: t/T = 24/6.0 = 4. Remaining mass: m = m₀·2^(−t/T) = 32/2⁴ = 32/16 = 2.0 mg. Answer: 2.0." } }
        ] }
    ]
  }
];
