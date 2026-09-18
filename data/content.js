// PhysiHub — sinh từ content.json bằng tools/build-data.ps1. Sửa content.json rồi chạy lại.
window.PH = window.PH || {};
PH.CONTENT = {
"1": {
  "drafted": false,
  "summary": {
    "vi": "Mô hình động học phân tử giải thích cấu trúc của ba thể rắn, lỏng, khí và các quá trình chuyển thể của chất.",
    "en": "The kinetic molecular model explains the structure of solids, liquids and gases and the changes between these states."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Mọi chất đều được cấu tạo từ các hạt riêng biệt gọi là phân tử, nguyên tử. Chúng chuyển động hỗn loạn không ngừng; nhiệt độ của vật càng cao thì tốc độ chuyển động nhiệt của phân tử càng lớn. Giữa các phân tử có lực tương tác (hút và đẩy); lực này cùng với chuyển động nhiệt quyết định chất ở thể rắn, lỏng hay khí.",
      "en": "All matter is made of separate particles called molecules or atoms. They move randomly and never stop; the higher the temperature, the faster their thermal motion. The particles also exert attractive and repulsive forces on one another; together with thermal motion, these forces decide whether a substance is a solid, a liquid or a gas."
    },
    {
      "type": "table",
      "head": [
        { "vi": "Thể", "en": "State" },
        { "vi": "Trật tự và lực liên kết", "en": "Order and bonding" },
        { "vi": "Chuyển động phân tử", "en": "Molecular motion" },
        { "vi": "Hình dạng, thể tích", "en": "Shape and volume" }
      ],
      "rows": [
        [
          { "vi": "Rắn", "en": "Solid" },
          { "vi": "Trật tự xa, lực liên kết rất mạnh", "en": "Long-range order, very strong forces" },
          { "vi": "Chỉ dao động quanh vị trí cân bằng cố định", "en": "Only vibrate about fixed equilibrium positions" },
          { "vi": "Hình dạng và thể tích xác định", "en": "Definite shape and volume" }
        ],
        [
          { "vi": "Lỏng", "en": "Liquid" },
          { "vi": "Trật tự gần, lực liên kết yếu hơn", "en": "Short-range order, weaker forces" },
          { "vi": "Dao động quanh vị trí cân bằng tạm thời, có thể dịch chuyển", "en": "Vibrate about temporary positions that can shift" },
          { "vi": "Thể tích xác định, hình dạng theo bình chứa", "en": "Definite volume, takes the shape of the container" }
        ],
        [
          { "vi": "Khí", "en": "Gas" },
          { "vi": "Hoàn toàn hỗn loạn, khoảng cách rất lớn, lực tương tác không đáng kể", "en": "Completely disordered, very large spacing, negligible forces" },
          { "vi": "Chuyển động tự do, chỉ tương tác khi va chạm", "en": "Move freely, interact only in collisions" },
          { "vi": "Chiếm toàn bộ thể tích bình chứa", "en": "Fills the whole container" }
        ]
      ]
    },
    {
      "type": "text",
      "vi": "Khi nhận hoặc toả nhiệt, chất có thể chuyển thể: nóng chảy (rắn → lỏng) và đông đặc (lỏng → rắn); hoá hơi (lỏng → khí, gồm bay hơi và sôi) và ngưng tụ (khí → lỏng). Chất rắn kết tinh nóng chảy hoặc đông đặc ở một nhiệt độ xác định; chất rắn vô định hình không có nhiệt độ nóng chảy xác định. Trong suốt quá trình chuyển thể, nhiệt độ của chất không đổi dù chất vẫn nhận (hoặc toả) nhiệt.",
      "en": "When a substance gains or loses heat it can change state: melting (solid → liquid) and freezing (liquid → solid); vaporisation (liquid → gas, by evaporation or boiling) and condensation (gas → liquid). A crystalline solid melts or freezes at a definite temperature; an amorphous solid has no definite melting point. During a change of state the temperature stays constant even though heat is still being absorbed (or released)."
    },
    {
      "type": "callout",
      "vi": "Câu hỏi hay gặp: vì sao chất khí dễ nén còn chất lỏng, chất rắn gần như không nén được? Vì khoảng cách giữa các phân tử khí rất lớn so với kích thước phân tử.",
      "en": "A favourite exam question: why can gases be compressed easily while liquids and solids hardly can? Because in a gas the spacing between molecules is very large compared with the size of the molecules."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Ở thể nào các phân tử chỉ dao động quanh những vị trí cân bằng cố định?", "en": "In which state do the molecules only vibrate about fixed equilibrium positions?" },
      "options": [
        { "vi": "Thể khí", "en": "Gas" },
        { "vi": "Thể lỏng", "en": "Liquid" },
        { "vi": "Thể rắn", "en": "Solid" },
        { "vi": "Cả ba thể", "en": "All three states" }
      ],
      "correct": 2,
      "why": { "vi": "Ở thể rắn lực liên kết rất mạnh, giữ mỗi phân tử tại một vị trí cân bằng cố định.", "en": "In a solid the bonding forces are very strong and hold each molecule at a fixed equilibrium position." }
    },
    {
      "q": { "vi": "Quá trình chuyển từ thể lỏng sang thể khí được gọi là", "en": "The change from liquid to gas is called" },
      "options": [
        { "vi": "nóng chảy", "en": "melting" },
        { "vi": "hoá hơi", "en": "vaporisation" },
        { "vi": "ngưng tụ", "en": "condensation" },
        { "vi": "đông đặc", "en": "freezing" }
      ],
      "correct": 1,
      "why": { "vi": "Hoá hơi gồm bay hơi (ở mặt thoáng) và sôi (trong toàn bộ khối chất lỏng).", "en": "Vaporisation includes evaporation (at the surface) and boiling (throughout the liquid)." }
    },
    {
      "q": { "vi": "Khi nhiệt độ của vật tăng, chuyển động nhiệt của các phân tử", "en": "When the temperature of a body rises, the thermal motion of its molecules" },
      "options": [
        { "vi": "chậm lại", "en": "slows down" },
        { "vi": "không thay đổi", "en": "does not change" },
        { "vi": "nhanh hơn", "en": "speeds up" },
        { "vi": "dừng lại khi tới 100 °C", "en": "stops at 100 °C" }
      ],
      "correct": 2,
      "why": { "vi": "Nhiệt độ càng cao thì tốc độ chuyển động hỗn loạn của phân tử càng lớn.", "en": "The higher the temperature, the faster the random motion of the molecules." }
    }
  ]
},
"2": {
  "drafted": false,
  "summary": {
    "vi": "Nội năng là tổng động năng và thế năng của các phân tử; nó thay đổi khi hệ thực hiện công hoặc truyền nhiệt theo định luật I: ΔU = A + Q.",
    "en": "Internal energy is the total kinetic and potential energy of the molecules; it changes through work or heat transfer according to the first law, ΔU = A + Q."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Nội năng U của một vật là tổng động năng chuyển động hỗn loạn và thế năng tương tác của các phân tử cấu tạo nên vật. Nội năng phụ thuộc vào nhiệt độ (qua động năng phân tử) và thể tích (qua thế năng tương tác) của vật. Có hai cách làm thay đổi nội năng: thực hiện công (nén khí, cọ xát) và truyền nhiệt (đun nóng, tiếp xúc với vật nóng hơn). Phần nội năng mà vật nhận thêm hay mất bớt trong quá trình truyền nhiệt gọi là nhiệt lượng.",
      "en": "The internal energy U of a body is the sum of the kinetic energy of the random motion of its molecules and the potential energy of their interactions. It depends on the temperature (through molecular kinetic energy) and on the volume (through interaction potential energy). Internal energy can be changed in two ways: by doing work (compressing a gas, rubbing) and by heat transfer (heating, contact with a hotter body). The internal energy gained or lost by heat transfer is called the quantity of heat."
    },
    {
      "type": "formula",
      "title": { "vi": "Định luật I của nhiệt động lực học", "en": "First law of thermodynamics" },
      "math": "ΔU = A + Q",
      "vars": [
        { "sym": "ΔU", "vi": "độ biến thiên nội năng của hệ", "en": "change in internal energy of the system", "unit": "J" },
        { "sym": "A", "vi": "công mà hệ nhận được", "en": "work done on the system", "unit": "J" },
        { "sym": "Q", "vi": "nhiệt lượng mà hệ nhận được", "en": "heat supplied to the system", "unit": "J" }
      ],
      "note": {
        "vi": "Độ biến thiên nội năng của hệ bằng tổng công và nhiệt lượng mà hệ nhận được. Đây là định luật bảo toàn năng lượng áp dụng cho các quá trình nhiệt.",
        "en": "The change in internal energy of a system equals the sum of the work done on it and the heat supplied to it. This is conservation of energy applied to thermal processes."
      }
    },
    {
      "type": "table",
      "head": [
        { "vi": "Đại lượng", "en": "Quantity" },
        { "vi": "Dấu dương (+)", "en": "Positive (+)" },
        { "vi": "Dấu âm (−)", "en": "Negative (−)" }
      ],
      "rows": [
        [
          { "vi": "A", "en": "A" },
          { "vi": "hệ nhận công (bị nén)", "en": "work is done on the system (compressed)" },
          { "vi": "hệ thực hiện công (dãn nở)", "en": "the system does work (expands)" }
        ],
        [
          { "vi": "Q", "en": "Q" },
          { "vi": "hệ nhận nhiệt", "en": "the system absorbs heat" },
          { "vi": "hệ toả nhiệt", "en": "the system releases heat" }
        ],
        [
          { "vi": "ΔU", "en": "ΔU" },
          { "vi": "nội năng tăng", "en": "internal energy increases" },
          { "vi": "nội năng giảm", "en": "internal energy decreases" }
        ]
      ]
    },
    {
      "type": "text",
      "vi": "Ví dụ: khí trong xilanh nhận nhiệt lượng 100 J và thực hiện công 30 J để đẩy pit-tông. Khi đó Q = +100 J, A = −30 J nên ΔU = −30 + 100 = 70 J: nội năng của khí tăng 70 J. Trong quá trình đẳng tích (thể tích không đổi) khí không thực hiện công, A = 0 nên ΔU = Q: toàn bộ nhiệt lượng nhận được làm tăng nội năng.",
      "en": "Example: the gas in a cylinder absorbs 100 J of heat and does 30 J of work pushing the piston. Then Q = +100 J and A = −30 J, so ΔU = −30 + 100 = 70 J: the internal energy of the gas rises by 70 J. In an isochoric process (constant volume) the gas does no work, A = 0, so ΔU = Q: all the heat absorbed goes into internal energy."
    },
    {
      "type": "callout",
      "vi": "Lỗi hay gặp là sai dấu. Trước khi thay số, hãy tự hỏi với từng đại lượng: hệ nhận hay mất năng lượng? Nhận thì dương, mất thì âm.",
      "en": "The most common mistake is a wrong sign. Before substituting numbers, ask for each quantity: does the system gain or lose energy? Gain is positive, loss is negative."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Một lượng khí nhận nhiệt lượng 200 J và bị nén với công 50 J. Độ biến thiên nội năng của khí là", "en": "A gas absorbs 200 J of heat and is compressed by 50 J of work. The change in its internal energy is" },
      "options": [
        { "vi": "150 J", "en": "150 J" },
        { "vi": "250 J", "en": "250 J" },
        { "vi": "−150 J", "en": "−150 J" },
        { "vi": "−250 J", "en": "−250 J" }
      ],
      "correct": 1,
      "why": { "vi": "Hệ nhận cả nhiệt lẫn công: Q = +200 J, A = +50 J, nên ΔU = 250 J.", "en": "The system gains both heat and work: Q = +200 J, A = +50 J, so ΔU = 250 J." }
    },
    {
      "q": { "vi": "Cách nào sau đây làm thay đổi nội năng của vật bằng thực hiện công?", "en": "Which of these changes the internal energy of a body by doing work?" },
      "options": [
        { "vi": "Đun nóng nước trên bếp", "en": "Heating water on a stove" },
        { "vi": "Phơi vật ngoài nắng", "en": "Leaving an object in the sun" },
        { "vi": "Cọ xát miếng kim loại lên mặt bàn", "en": "Rubbing a piece of metal on a table" },
        { "vi": "Thả miếng đồng nóng vào nước lạnh", "en": "Dropping hot copper into cold water" }
      ],
      "correct": 2,
      "why": { "vi": "Cọ xát là thực hiện công; ba trường hợp còn lại là truyền nhiệt.", "en": "Rubbing does work on the metal; the other three are heat transfer." }
    },
    {
      "q": { "vi": "Trong quá trình đẳng tích, biểu thức của định luật I trở thành", "en": "In an isochoric process the first law reduces to" },
      "options": [
        { "vi": "ΔU = A", "en": "ΔU = A" },
        { "vi": "ΔU = Q", "en": "ΔU = Q" },
        { "vi": "ΔU = 0", "en": "ΔU = 0" },
        { "vi": "Q = −A", "en": "Q = −A" }
      ],
      "correct": 1,
      "why": { "vi": "Thể tích không đổi nên khí không thực hiện công (A = 0).", "en": "The volume does not change, so no work is done (A = 0)." }
    }
  ]
},
"3": {
  "drafted": false,
  "summary": {
    "vi": "Nhiệt độ cho biết chiều truyền nhiệt giữa các vật và được đo bằng nhiệt kế theo thang Celsius, Kelvin hoặc Fahrenheit.",
    "en": "Temperature tells us the direction of heat flow between bodies and is measured with thermometers on the Celsius, Kelvin or Fahrenheit scale."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Khi hai vật có nhiệt độ khác nhau tiếp xúc nhau, năng lượng nhiệt truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp cho đến khi hai vật đạt cân bằng nhiệt (cùng nhiệt độ). Nhiệt độ là đại lượng đặc trưng cho mức độ nóng, lạnh của vật và xác định chiều truyền nhiệt. Nhiệt kế đo nhiệt độ dựa trên sự phụ thuộc vào nhiệt độ của một tính chất vật lí, như sự nở vì nhiệt của chất lỏng, điện trở của kim loại hay bức xạ hồng ngoại của vật.",
      "en": "When two bodies at different temperatures touch, thermal energy flows from the hotter body to the colder one until they reach thermal equilibrium (the same temperature). Temperature describes how hot or cold a body is and determines the direction of heat flow. A thermometer measures temperature through a physical property that depends on it, such as the thermal expansion of a liquid, the resistance of a metal or the infrared radiation a body emits."
    },
    {
      "type": "text",
      "vi": "Thang Celsius lấy hai mốc: 0 °C là nhiệt độ nước đá đang tan và 100 °C là nhiệt độ nước sôi ở áp suất tiêu chuẩn. Thang Kelvin (thang nhiệt độ tuyệt đối) lấy 0 K là độ không tuyệt đối – nhiệt độ thấp nhất mà vật có thể đạt tới, khi đó động năng chuyển động nhiệt của phân tử cực tiểu – và 273,16 K là nhiệt độ điểm ba của nước. Một độ chia trên thang Kelvin bằng một độ chia trên thang Celsius.",
      "en": "The Celsius scale uses two fixed points: 0 °C is the temperature of melting ice and 100 °C is the temperature of boiling water at standard pressure. The Kelvin (absolute) scale takes 0 K as absolute zero, the lowest temperature possible, at which the thermal kinetic energy of the molecules is minimal, and 273.16 K as the triple point of water. One kelvin is the same size as one degree Celsius."
    },
    {
      "type": "formula",
      "title": { "vi": "Chuyển đổi giữa các thang nhiệt độ", "en": "Converting between temperature scales" },
      "math": "T(K) = t(°C) + 273   ;   t(°F) = (9/5)·t(°C) + 32",
      "vars": [
        { "sym": "T", "vi": "nhiệt độ tuyệt đối", "en": "absolute temperature", "unit": "K" },
        { "sym": "t", "vi": "nhiệt độ Celsius", "en": "Celsius temperature", "unit": "°C" }
      ],
      "note": {
        "vi": "Chính xác hơn: T = t + 273,15. Độ biến thiên nhiệt độ có cùng giá trị dù đo bằng K hay °C: ΔT = Δt.",
        "en": "More precisely T = t + 273.15. A temperature change has the same value in kelvin and in degrees Celsius: ΔT = Δt."
      }
    },
    {
      "type": "callout",
      "vi": "Trong các công thức vật lí (định luật Charles, phương trình trạng thái) luôn dùng nhiệt độ tuyệt đối T tính bằng kelvin, không dùng t tính bằng °C.",
      "en": "In physics formulas (Charles's law, the equation of state) always use the absolute temperature T in kelvin, never t in °C."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Nhiệt độ 27 °C ứng với bao nhiêu kelvin?", "en": "What is 27 °C in kelvin?" },
      "options": [
        { "vi": "27 K", "en": "27 K" },
        { "vi": "246 K", "en": "246 K" },
        { "vi": "300 K", "en": "300 K" },
        { "vi": "327 K", "en": "327 K" }
      ],
      "correct": 2,
      "why": { "vi": "T = 27 + 273 = 300 K.", "en": "T = 27 + 273 = 300 K." }
    },
    {
      "q": { "vi": "Nhiệt độ nào sau đây là thấp nhất?", "en": "Which of these temperatures is the lowest?" },
      "options": [
        { "vi": "0 °C", "en": "0 °C" },
        { "vi": "0 K", "en": "0 K" },
        { "vi": "0 °F", "en": "0 °F" },
        { "vi": "−100 °C", "en": "−100 °C" }
      ],
      "correct": 1,
      "why": { "vi": "0 K = −273 °C là độ không tuyệt đối, thấp hơn mọi nhiệt độ còn lại.", "en": "0 K = −273 °C is absolute zero, lower than all the others." }
    },
    {
      "q": { "vi": "Hai vật tiếp xúc nhau mà không có truyền nhiệt giữa chúng khi chúng có cùng", "en": "Two bodies in contact exchange no heat when they have the same" },
      "options": [
        { "vi": "khối lượng", "en": "mass" },
        { "vi": "nội năng", "en": "internal energy" },
        { "vi": "nhiệt độ", "en": "temperature" },
        { "vi": "nhiệt dung riêng", "en": "specific heat capacity" }
      ],
      "correct": 2,
      "why": { "vi": "Cân bằng nhiệt xảy ra khi hai vật có cùng nhiệt độ.", "en": "Thermal equilibrium means the two bodies are at the same temperature." }
    }
  ]
},
"4": {
  "drafted": true,
  "summary": {
    "vi": "Nhiệt dung riêng cho biết nhiệt lượng cần cung cấp để 1 kg chất tăng thêm 1 K; nhiệt lượng trao đổi tính bằng Q = mcΔT.",
    "en": "Specific heat capacity is the heat needed to raise 1 kg of a substance by 1 K; the heat exchanged is Q = mcΔT."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Nhiệt lượng Q mà một vật nhận vào (hoặc toả ra) khi nhiệt độ thay đổi tỉ lệ với khối lượng m của vật, với độ biến thiên nhiệt độ ΔT và phụ thuộc vào chất làm vật. Nhiệt dung riêng c của một chất là nhiệt lượng cần cung cấp để 1 kg chất đó tăng thêm 1 K (hay 1 °C). Nước có nhiệt dung riêng lớn (khoảng 4 200 J/(kg·K)), lớn hơn nhiều so với kim loại như đồng (khoảng 380 J/(kg·K)); vì thế nước được dùng làm chất tải nhiệt và giúp điều hoà khí hậu ven biển.",
      "en": "The heat Q a body absorbs (or releases) when its temperature changes is proportional to its mass m and to the temperature change ΔT, and depends on the material. The specific heat capacity c of a substance is the heat needed to raise 1 kg of it by 1 K (or 1 °C). Water has a large specific heat capacity (about 4 200 J/(kg·K)), much larger than metals such as copper (about 380 J/(kg·K)); that is why water is used as a coolant and why it moderates coastal climates."
    },
    {
      "type": "formula",
      "title": { "vi": "Nhiệt lượng trao đổi khi thay đổi nhiệt độ", "en": "Heat exchanged during a temperature change" },
      "math": "Q = m·c·ΔT = m·c·(T₂ − T₁)",
      "vars": [
        { "sym": "Q", "vi": "nhiệt lượng vật nhận vào hoặc toả ra", "en": "heat absorbed or released", "unit": "J" },
        { "sym": "m", "vi": "khối lượng của vật", "en": "mass of the body", "unit": "kg" },
        { "sym": "c", "vi": "nhiệt dung riêng của chất", "en": "specific heat capacity", "unit": "J/(kg·K)" },
        { "sym": "ΔT", "vi": "độ biến thiên nhiệt độ", "en": "temperature change", "unit": "K" }
      ],
      "note": {
        "vi": "Q > 0 khi vật nhận nhiệt (nhiệt độ tăng), Q < 0 khi vật toả nhiệt. ΔT tính bằng K hay °C đều cho cùng giá trị.",
        "en": "Q > 0 when the body absorbs heat (temperature rises), Q < 0 when it releases heat. ΔT has the same value in K or °C."
      }
    },
    {
      "type": "text",
      "vi": "Khi hai vật trao đổi nhiệt trong hệ cô lập, nhiệt lượng vật nóng toả ra bằng nhiệt lượng vật lạnh thu vào: Q_toả = Q_thu. Đây là phương trình cân bằng nhiệt, dùng để xác định nhiệt dung riêng bằng thí nghiệm với nhiệt lượng kế.",
      "en": "When two bodies exchange heat in an isolated system, the heat released by the hotter body equals the heat absorbed by the colder one: Q_released = Q_absorbed. This heat-balance equation is used to measure specific heat capacity with a calorimeter."
    },
    {
      "type": "callout",
      "vi": "Khi tính toán, đổi khối lượng về kg và kiểm tra đơn vị của c: J/(kg·K) cho kết quả Q bằng jun.",
      "en": "In calculations convert mass to kg and check the unit of c: J/(kg·K) gives Q in joules."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Nhiệt lượng cần cung cấp để đun 2 kg nước từ 20 °C lên 70 °C (c = 4 200 J/(kg·K)) là", "en": "The heat needed to warm 2 kg of water from 20 °C to 70 °C (c = 4 200 J/(kg·K)) is" },
      "options": [
        { "vi": "42 kJ", "en": "42 kJ" },
        { "vi": "210 kJ", "en": "210 kJ" },
        { "vi": "420 kJ", "en": "420 kJ" },
        { "vi": "588 kJ", "en": "588 kJ" }
      ],
      "correct": 2,
      "why": { "vi": "Q = 2 · 4 200 · 50 = 420 000 J = 420 kJ.", "en": "Q = 2 × 4 200 × 50 = 420 000 J = 420 kJ." }
    },
    {
      "q": { "vi": "Đơn vị của nhiệt dung riêng là", "en": "The unit of specific heat capacity is" },
      "options": [
        { "vi": "J/kg", "en": "J/kg" },
        { "vi": "J/K", "en": "J/K" },
        { "vi": "J/(kg·K)", "en": "J/(kg·K)" },
        { "vi": "J·kg/K", "en": "J·kg/K" }
      ],
      "correct": 2,
      "why": { "vi": "Từ c = Q/(mΔT) suy ra đơn vị J/(kg·K).", "en": "From c = Q/(mΔT) the unit is J/(kg·K)." }
    },
    {
      "q": { "vi": "Hai vật cùng khối lượng, nhận cùng nhiệt lượng. Vật có nhiệt dung riêng lớn hơn sẽ", "en": "Two bodies of equal mass absorb the same heat. The one with the larger specific heat capacity" },
      "options": [
        { "vi": "tăng nhiệt độ nhiều hơn", "en": "warms up more" },
        { "vi": "tăng nhiệt độ ít hơn", "en": "warms up less" },
        { "vi": "tăng nhiệt độ như nhau", "en": "warms up by the same amount" },
        { "vi": "không tăng nhiệt độ", "en": "does not warm up at all" }
      ],
      "correct": 1,
      "why": { "vi": "ΔT = Q/(mc): c càng lớn thì ΔT càng nhỏ.", "en": "ΔT = Q/(mc): the larger c is, the smaller the temperature rise." }
    }
  ]
},
"5": {
  "drafted": true,
  "summary": {
    "vi": "Nhiệt nóng chảy riêng là nhiệt lượng cần để làm nóng chảy hoàn toàn 1 kg chất rắn ở nhiệt độ nóng chảy: Q = λm.",
    "en": "Specific latent heat of fusion is the heat needed to melt 1 kg of a solid completely at its melting point: Q = λm."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Khi đun nóng một chất rắn kết tinh, nhiệt độ của nó tăng dần đến nhiệt độ nóng chảy rồi giữ không đổi trong suốt quá trình nóng chảy, dù vẫn nhận nhiệt. Nhiệt lượng nhận vào lúc này không làm tăng động năng phân tử mà dùng để phá vỡ liên kết trong mạng tinh thể, làm tăng thế năng tương tác của các phân tử. Nhiệt lượng cần để làm nóng chảy hoàn toàn một vật rắn ở nhiệt độ nóng chảy gọi là nhiệt nóng chảy; nó tỉ lệ với khối lượng của vật.",
      "en": "When a crystalline solid is heated, its temperature rises to the melting point and then stays constant throughout melting, even though heat is still absorbed. This heat does not increase the kinetic energy of the molecules; it breaks the bonds of the crystal lattice and raises the potential energy of the molecules. The heat needed to melt a solid completely at its melting point is called the heat of fusion; it is proportional to the mass of the body."
    },
    {
      "type": "formula",
      "title": { "vi": "Nhiệt nóng chảy", "en": "Heat of fusion" },
      "math": "Q = λ·m",
      "vars": [
        { "sym": "Q", "vi": "nhiệt lượng cần để nóng chảy hoàn toàn", "en": "heat needed to melt completely", "unit": "J" },
        { "sym": "λ", "vi": "nhiệt nóng chảy riêng của chất", "en": "specific latent heat of fusion", "unit": "J/kg" },
        { "sym": "m", "vi": "khối lượng chất rắn", "en": "mass of the solid", "unit": "kg" }
      ],
      "note": {
        "vi": "Nhiệt nóng chảy riêng λ là nhiệt lượng cần để làm nóng chảy hoàn toàn 1 kg chất ở nhiệt độ nóng chảy. Nước đá: λ ≈ 3,34 × 10⁵ J/kg.",
        "en": "The specific latent heat of fusion λ is the heat needed to melt 1 kg of the substance at its melting point. Ice: λ ≈ 3.34 × 10⁵ J/kg."
      }
    },
    {
      "type": "callout",
      "vi": "Bài toán 'nước đá ở −10 °C thành nước ở 20 °C' gồm ba giai đoạn: làm nóng nước đá đến 0 °C (Q = mc_đá·ΔT), làm tan hết đá ở 0 °C (Q = λm), rồi làm nóng nước (Q = mc_nước·ΔT). Cộng cả ba nhiệt lượng lại.",
      "en": "A problem such as 'ice at −10 °C becomes water at 20 °C' has three stages: warm the ice to 0 °C (Q = mc_ice·ΔT), melt it at 0 °C (Q = λm), then warm the water (Q = mc_water·ΔT). Add the three amounts of heat."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Nhiệt lượng cần để làm tan hoàn toàn 0,5 kg nước đá ở 0 °C (λ = 3,34 × 10⁵ J/kg) là", "en": "The heat needed to melt 0.5 kg of ice at 0 °C completely (λ = 3.34 × 10⁵ J/kg) is" },
      "options": [
        { "vi": "6,68 × 10⁵ J", "en": "6.68 × 10⁵ J" },
        { "vi": "3,34 × 10⁵ J", "en": "3.34 × 10⁵ J" },
        { "vi": "1,67 × 10⁵ J", "en": "1.67 × 10⁵ J" },
        { "vi": "0,67 × 10⁵ J", "en": "0.67 × 10⁵ J" }
      ],
      "correct": 2,
      "why": { "vi": "Q = λm = 3,34 × 10⁵ · 0,5 = 1,67 × 10⁵ J.", "en": "Q = λm = 3.34 × 10⁵ × 0.5 = 1.67 × 10⁵ J." }
    },
    {
      "q": { "vi": "Trong khi một chất rắn kết tinh đang nóng chảy, nhiệt độ của nó", "en": "While a crystalline solid is melting, its temperature" },
      "options": [
        { "vi": "tăng đều", "en": "rises steadily" },
        { "vi": "giảm dần", "en": "falls gradually" },
        { "vi": "không đổi", "en": "stays constant" },
        { "vi": "tăng rồi giảm", "en": "rises then falls" }
      ],
      "correct": 2,
      "why": { "vi": "Nhiệt lượng nhận vào dùng để phá vỡ mạng tinh thể chứ không làm tăng nhiệt độ.", "en": "The heat absorbed breaks the crystal lattice instead of raising the temperature." }
    },
    {
      "q": { "vi": "Nhiệt nóng chảy riêng của một chất phụ thuộc vào", "en": "The specific latent heat of fusion of a substance depends on" },
      "options": [
        { "vi": "khối lượng của vật", "en": "the mass of the body" },
        { "vi": "bản chất của chất", "en": "the nature of the substance" },
        { "vi": "hình dạng của vật", "en": "the shape of the body" },
        { "vi": "thời gian đun", "en": "the heating time" }
      ],
      "correct": 1,
      "why": { "vi": "λ là đặc trưng của từng chất, không phụ thuộc khối lượng hay hình dạng.", "en": "λ is a property of the substance itself, independent of mass or shape." }
    }
  ]
},
"6": {
  "drafted": true,
  "summary": {
    "vi": "Nhiệt hoá hơi riêng là nhiệt lượng cần để làm hoá hơi hoàn toàn 1 kg chất lỏng ở nhiệt độ sôi: Q = Lm.",
    "en": "Specific latent heat of vaporisation is the heat needed to vaporise 1 kg of a liquid completely at its boiling point: Q = Lm."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Sự hoá hơi là quá trình chuyển từ thể lỏng sang thể khí, xảy ra dưới hai hình thức: bay hơi ở mặt thoáng tại mọi nhiệt độ và sôi trong toàn bộ khối chất lỏng ở nhiệt độ sôi. Ở áp suất tiêu chuẩn, mỗi chất lỏng sôi ở một nhiệt độ xác định và nhiệt độ này không đổi trong suốt quá trình sôi. Nhiệt lượng cung cấp lúc này dùng để thắng lực hút giữa các phân tử, đưa chúng ra khỏi khối chất lỏng, nên thế năng tương tác của phân tử tăng còn nhiệt độ không tăng.",
      "en": "Vaporisation is the change from liquid to gas. It happens in two ways: evaporation at the surface at any temperature, and boiling throughout the liquid at the boiling point. At standard pressure each liquid boils at a definite temperature, which stays constant while boiling continues. The heat supplied is used to overcome the attraction between molecules and pull them out of the liquid, so the potential energy of the molecules rises while the temperature does not."
    },
    {
      "type": "formula",
      "title": { "vi": "Nhiệt hoá hơi", "en": "Heat of vaporisation" },
      "math": "Q = L·m",
      "vars": [
        { "sym": "Q", "vi": "nhiệt lượng cần để hoá hơi hoàn toàn", "en": "heat needed to vaporise completely", "unit": "J" },
        { "sym": "L", "vi": "nhiệt hoá hơi riêng của chất lỏng", "en": "specific latent heat of vaporisation", "unit": "J/kg" },
        { "sym": "m", "vi": "khối lượng chất lỏng", "en": "mass of the liquid", "unit": "kg" }
      ],
      "note": {
        "vi": "Nhiệt hoá hơi riêng L là nhiệt lượng cần để làm hoá hơi hoàn toàn 1 kg chất lỏng ở nhiệt độ sôi. Nước ở 100 °C: L ≈ 2,26 × 10⁶ J/kg, lớn hơn nhiều so với nhiệt nóng chảy riêng của nước đá.",
        "en": "The specific latent heat of vaporisation L is the heat needed to vaporise 1 kg of the liquid at its boiling point. Water at 100 °C: L ≈ 2.26 × 10⁶ J/kg, far larger than the latent heat of fusion of ice."
      }
    },
    {
      "type": "table",
      "head": [
        { "vi": "Kí hiệu", "en": "Symbol" },
        { "vi": "Đại lượng", "en": "Quantity" },
        { "vi": "Đơn vị", "en": "Unit" },
        { "vi": "Ý nghĩa", "en": "Meaning" }
      ],
      "rows": [
        [
          { "vi": "c", "en": "c" },
          { "vi": "nhiệt dung riêng", "en": "specific heat capacity" },
          { "vi": "J/(kg·K)", "en": "J/(kg·K)" },
          { "vi": "nhiệt lượng làm 1 kg chất tăng thêm 1 K", "en": "heat to raise 1 kg by 1 K" }
        ],
        [
          { "vi": "λ", "en": "λ" },
          { "vi": "nhiệt nóng chảy riêng", "en": "specific latent heat of fusion" },
          { "vi": "J/kg", "en": "J/kg" },
          { "vi": "nhiệt lượng làm nóng chảy 1 kg chất ở nhiệt độ nóng chảy", "en": "heat to melt 1 kg at the melting point" }
        ],
        [
          { "vi": "L", "en": "L" },
          { "vi": "nhiệt hoá hơi riêng", "en": "specific latent heat of vaporisation" },
          { "vi": "J/kg", "en": "J/kg" },
          { "vi": "nhiệt lượng làm hoá hơi hoàn toàn 1 kg chất lỏng ở nhiệt độ sôi", "en": "heat to vaporise 1 kg at the boiling point" }
        ]
      ]
    },
    {
      "type": "callout",
      "vi": "Hơi nước ở 100 °C gây bỏng nặng hơn nước sôi cùng nhiệt độ vì khi ngưng tụ nó toả thêm nhiệt lượng Lm rất lớn.",
      "en": "Steam at 100 °C scalds worse than boiling water at the same temperature because it releases the large extra heat Lm when it condenses."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Nhiệt lượng cần để làm hoá hơi hoàn toàn 2 kg nước ở 100 °C (L = 2,26 × 10⁶ J/kg) là", "en": "The heat needed to vaporise 2 kg of water at 100 °C completely (L = 2.26 × 10⁶ J/kg) is" },
      "options": [
        { "vi": "1,13 × 10⁶ J", "en": "1.13 × 10⁶ J" },
        { "vi": "2,26 × 10⁶ J", "en": "2.26 × 10⁶ J" },
        { "vi": "4,52 × 10⁶ J", "en": "4.52 × 10⁶ J" },
        { "vi": "9,04 × 10⁶ J", "en": "9.04 × 10⁶ J" }
      ],
      "correct": 2,
      "why": { "vi": "Q = Lm = 2,26 × 10⁶ · 2 = 4,52 × 10⁶ J.", "en": "Q = Lm = 2.26 × 10⁶ × 2 = 4.52 × 10⁶ J." }
    },
    {
      "q": { "vi": "Điểm khác nhau giữa sự sôi và sự bay hơi là", "en": "The difference between boiling and evaporation is that" },
      "options": [
        { "vi": "sôi xảy ra ở mọi nhiệt độ, bay hơi chỉ ở nhiệt độ sôi", "en": "boiling happens at any temperature, evaporation only at the boiling point" },
        { "vi": "sôi xảy ra trong toàn khối chất lỏng ở nhiệt độ sôi, bay hơi xảy ra ở mặt thoáng tại mọi nhiệt độ", "en": "boiling happens throughout the liquid at the boiling point, evaporation at the surface at any temperature" },
        { "vi": "cả hai đều chỉ xảy ra ở mặt thoáng", "en": "both happen only at the surface" },
        { "vi": "bay hơi cần nhiệt, sôi thì không", "en": "evaporation needs heat, boiling does not" }
      ],
      "correct": 1,
      "why": { "vi": "Bay hơi xảy ra ở mặt thoáng tại mọi nhiệt độ; sôi xảy ra cả trong lòng chất lỏng ở nhiệt độ sôi.", "en": "Evaporation occurs at the surface at any temperature; boiling occurs inside the liquid too, at the boiling point." }
    },
    {
      "q": { "vi": "Trong quá trình sôi ở áp suất không đổi, nhiệt lượng cung cấp cho chất lỏng dùng để", "en": "During boiling at constant pressure, the heat supplied to the liquid is used to" },
      "options": [
        { "vi": "tăng động năng phân tử", "en": "increase the kinetic energy of the molecules" },
        { "vi": "tăng nhiệt độ chất lỏng", "en": "raise the temperature of the liquid" },
        { "vi": "tăng thế năng tương tác giữa các phân tử", "en": "increase the potential energy of interaction between molecules" },
        { "vi": "giảm nội năng của chất lỏng", "en": "reduce the internal energy of the liquid" }
      ],
      "correct": 2,
      "why": { "vi": "Nhiệt độ không đổi nên động năng không tăng; nhiệt lượng dùng để tách các phân tử ra xa nhau.", "en": "The temperature is constant so kinetic energy does not rise; the heat separates the molecules from one another." }
    }
  ]
},
"8": {
  "drafted": false,
  "summary": {
    "vi": "Chất khí gồm các phân tử rất nhỏ chuyển động hỗn loạn, va chạm với nhau và với thành bình; khí lí tưởng là mô hình đơn giản hoá của chất khí thực.",
    "en": "A gas consists of tiny molecules in random motion that collide with each other and with the container walls; the ideal gas is a simplified model of real gases."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Theo mô hình động học phân tử, chất khí gồm các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng. Các phân tử chuyển động hỗn loạn không ngừng theo mọi hướng; nhiệt độ càng cao thì các phân tử chuyển động càng nhanh. Khi chuyển động, các phân tử va chạm với nhau và với thành bình; chính các va chạm với thành bình gây ra áp suất của chất khí lên thành bình.",
      "en": "In the kinetic molecular model a gas consists of molecules whose size is very small compared with the distance between them. The molecules move randomly and ceaselessly in all directions; the higher the temperature, the faster they move. As they move they collide with one another and with the walls of the container; the collisions with the walls are what produce the pressure of the gas."
    },
    {
      "type": "text",
      "vi": "Khí lí tưởng là mô hình chất khí trong đó các phân tử được coi là chất điểm (bỏ qua thể tích riêng của phân tử), chỉ tương tác với nhau khi va chạm, và mọi va chạm giữa các phân tử với nhau và với thành bình đều là va chạm hoàn toàn đàn hồi. Ở áp suất không quá cao và nhiệt độ không quá thấp, các khí thực như không khí, oxygen, hydrogen tuân theo khá tốt các định luật của khí lí tưởng.",
      "en": "An ideal gas is a model in which the molecules are treated as point particles (their own volume is ignored), interact only when they collide, and every collision between molecules or with the walls is perfectly elastic. At moderate pressure and not too low a temperature, real gases such as air, oxygen and hydrogen obey the ideal-gas laws quite well."
    },
    {
      "type": "formula",
      "title": { "vi": "Lượng chất và số phân tử", "en": "Amount of substance and number of molecules" },
      "math": "n = m/M = N/N_A",
      "vars": [
        { "sym": "n", "vi": "số mol khí", "en": "amount of gas", "unit": "mol" },
        { "sym": "m", "vi": "khối lượng khí", "en": "mass of gas", "unit": "g" },
        { "sym": "M", "vi": "khối lượng mol", "en": "molar mass", "unit": "g/mol" },
        { "sym": "N", "vi": "số phân tử khí", "en": "number of molecules", "unit": "—" },
        { "sym": "N_A", "vi": "số Avogadro", "en": "Avogadro constant", "unit": "mol⁻¹" }
      ],
      "note": {
        "vi": "1 mol chất chứa N_A = 6,02 × 10²³ phân tử. Ở điều kiện tiêu chuẩn (0 °C, 1 atm) 1 mol khí bất kì chiếm thể tích 22,4 lít.",
        "en": "One mole contains N_A = 6.02 × 10²³ molecules. At standard conditions (0 °C, 1 atm) one mole of any gas occupies 22.4 litres."
      }
    },
    {
      "type": "callout",
      "vi": "Chuyển động Brown của hạt phấn hoa trong nước hay hạt khói trong không khí là bằng chứng thực nghiệm cho thấy các phân tử chuyển động hỗn loạn không ngừng.",
      "en": "Brownian motion of pollen grains in water or smoke particles in air is experimental evidence that molecules are in ceaseless random motion."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Áp suất của chất khí tác dụng lên thành bình được gây ra bởi", "en": "The pressure a gas exerts on the container walls is caused by" },
      "options": [
        { "vi": "trọng lượng của các phân tử khí", "en": "the weight of the gas molecules" },
        { "vi": "lực hút giữa các phân tử khí", "en": "attraction between the gas molecules" },
        { "vi": "va chạm của các phân tử khí với thành bình", "en": "collisions of the gas molecules with the walls" },
        { "vi": "sự nở vì nhiệt của bình chứa", "en": "thermal expansion of the container" }
      ],
      "correct": 2,
      "why": { "vi": "Mỗi va chạm truyền cho thành bình một xung lực; vô số va chạm tạo nên áp suất.", "en": "Each collision gives the wall an impulse; countless collisions add up to a steady pressure." }
    },
    {
      "q": { "vi": "Điều nào sau đây KHÔNG thuộc mô hình khí lí tưởng?", "en": "Which statement is NOT part of the ideal-gas model?" },
      "options": [
        { "vi": "Phân tử được coi là chất điểm", "en": "Molecules are treated as point particles" },
        { "vi": "Các phân tử luôn hút nhau mạnh", "en": "Molecules always attract each other strongly" },
        { "vi": "Phân tử chỉ tương tác khi va chạm", "en": "Molecules interact only when they collide" },
        { "vi": "Va chạm là hoàn toàn đàn hồi", "en": "Collisions are perfectly elastic" }
      ],
      "correct": 1,
      "why": { "vi": "Trong mô hình khí lí tưởng, lực tương tác giữa các phân tử được bỏ qua trừ lúc va chạm.", "en": "In the ideal-gas model intermolecular forces are neglected except during collisions." }
    },
    {
      "q": { "vi": "Số phân tử có trong 2 mol khí oxygen là", "en": "The number of molecules in 2 mol of oxygen gas is" },
      "options": [
        { "vi": "6,02 × 10²³", "en": "6.02 × 10²³" },
        { "vi": "1,204 × 10²⁴", "en": "1.204 × 10²⁴" },
        { "vi": "3,01 × 10²³", "en": "3.01 × 10²³" },
        { "vi": "2 × 22,4", "en": "2 × 22.4" }
      ],
      "correct": 1,
      "why": { "vi": "N = n·N_A = 2 · 6,02 × 10²³ = 1,204 × 10²⁴ phân tử.", "en": "N = n·N_A = 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules." }
    }
  ]
},
"9": {
  "drafted": false,
  "summary": {
    "vi": "Ở nhiệt độ không đổi, áp suất của một lượng khí xác định tỉ lệ nghịch với thể tích của nó: pV = hằng số.",
    "en": "At constant temperature the pressure of a fixed mass of gas is inversely proportional to its volume: pV = constant."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Trạng thái của một lượng khí được xác định bởi ba thông số trạng thái: áp suất p, thể tích V và nhiệt độ tuyệt đối T. Quá trình biến đổi trạng thái trong đó nhiệt độ được giữ không đổi gọi là quá trình đẳng nhiệt. Thí nghiệm nén hoặc dãn từ từ một lượng khí trong xilanh kín (đủ chậm để nhiệt độ khí cân bằng với môi trường) cho thấy: khi thể tích giảm còn một nửa thì áp suất tăng gấp đôi, tích p·V hầu như không đổi.",
      "en": "The state of a fixed amount of gas is described by three state variables: pressure p, volume V and absolute temperature T. A change of state in which the temperature is kept constant is an isothermal process. Slowly compressing or expanding a gas in a sealed cylinder (slowly enough for its temperature to stay equal to the surroundings) shows that halving the volume doubles the pressure: the product p·V stays practically constant."
    },
    {
      "type": "formula",
      "title": { "vi": "Định luật Boyle", "en": "Boyle's law" },
      "math": "p·V = const   hay   p₁V₁ = p₂V₂",
      "vars": [
        { "sym": "p", "vi": "áp suất của khí", "en": "pressure of the gas", "unit": "Pa" },
        { "sym": "V", "vi": "thể tích của khí", "en": "volume of the gas", "unit": "m³" }
      ],
      "note": {
        "vi": "Khi nhiệt độ của một khối lượng khí xác định giữ không đổi, áp suất gây ra bởi khí tỉ lệ nghịch với thể tích của nó. Chỉ áp dụng cho một lượng khí xác định (khối lượng không đổi) ở nhiệt độ không đổi.",
        "en": "When the temperature of a fixed mass of gas is kept constant, the pressure of the gas is inversely proportional to its volume. It applies only to a fixed mass of gas at constant temperature."
      }
    },
    {
      "type": "text",
      "vi": "Đường đẳng nhiệt: trong hệ toạ độ (p, V), đường biểu diễn quá trình đẳng nhiệt là một nhánh hypebol; đường ứng với nhiệt độ cao hơn nằm xa gốc toạ độ hơn. Trong hệ toạ độ (p, T) hoặc (V, T), đường đẳng nhiệt là đoạn thẳng vuông góc với trục T. Ví dụ: một lượng khí có V₁ = 6 lít ở p₁ = 1 atm được nén đẳng nhiệt đến V₂ = 2 lít thì p₂ = p₁V₁/V₂ = 1 · 6/2 = 3 atm.",
      "en": "Isotherms: on a (p, V) diagram an isothermal process is a branch of a hyperbola; the isotherm for a higher temperature lies farther from the origin. On (p, T) or (V, T) axes an isotherm is a straight segment perpendicular to the T axis. Example: a gas with V₁ = 6 L at p₁ = 1 atm is compressed isothermally to V₂ = 2 L, so p₂ = p₁V₁/V₂ = 1 × 6/2 = 3 atm."
    },
    {
      "type": "table",
      "head": [
        { "vi": "Đơn vị", "en": "Unit" },
        { "vi": "Quy đổi", "en": "Conversion" }
      ],
      "rows": [
        [ { "vi": "1 Pa", "en": "1 Pa" }, { "vi": "1 N/m² (đơn vị SI của áp suất)", "en": "1 N/m² (SI unit of pressure)" } ],
        [ { "vi": "1 atm", "en": "1 atm" }, { "vi": "1,013 × 10⁵ Pa = 760 mmHg", "en": "1.013 × 10⁵ Pa = 760 mmHg" } ],
        [ { "vi": "1 bar", "en": "1 bar" }, { "vi": "10⁵ Pa", "en": "10⁵ Pa" } ],
        [ { "vi": "1 lít", "en": "1 litre" }, { "vi": "1 dm³ = 10⁻³ m³", "en": "1 dm³ = 10⁻³ m³" } ]
      ]
    },
    {
      "type": "callout",
      "vi": "Trong p₁V₁ = p₂V₂ có thể dùng bất kì đơn vị nào cho p và V, miễn là hai vế dùng cùng đơn vị. Tuy nhiên p phải là áp suất tuyệt đối của khí, không phải số chỉ áp suất dư trên đồng hồ.",
      "en": "In p₁V₁ = p₂V₂ you may use any units for p and V as long as both sides use the same ones. But p must be the absolute pressure of the gas, not the gauge reading above atmospheric pressure."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Nén đẳng nhiệt một lượng khí từ 8 lít xuống 2 lít. Áp suất ban đầu là 1,5 × 10⁵ Pa. Áp suất sau khi nén là", "en": "A gas is compressed isothermally from 8 L to 2 L. Its initial pressure is 1.5 × 10⁵ Pa. The final pressure is" },
      "options": [
        { "vi": "0,375 × 10⁵ Pa", "en": "0.375 × 10⁵ Pa" },
        { "vi": "3 × 10⁵ Pa", "en": "3 × 10⁵ Pa" },
        { "vi": "6 × 10⁵ Pa", "en": "6 × 10⁵ Pa" },
        { "vi": "12 × 10⁵ Pa", "en": "12 × 10⁵ Pa" }
      ],
      "correct": 2,
      "why": { "vi": "p₂ = p₁V₁/V₂ = 1,5 × 10⁵ · 8/2 = 6 × 10⁵ Pa.", "en": "p₂ = p₁V₁/V₂ = 1.5 × 10⁵ × 8/2 = 6 × 10⁵ Pa." }
    },
    {
      "q": { "vi": "Trong hệ toạ độ (p, V), đường đẳng nhiệt có dạng", "en": "On a (p, V) diagram an isotherm is" },
      "options": [
        { "vi": "đường thẳng đi qua gốc toạ độ", "en": "a straight line through the origin" },
        { "vi": "nhánh hypebol", "en": "a branch of a hyperbola" },
        { "vi": "đường thẳng song song với trục V", "en": "a straight line parallel to the V axis" },
        { "vi": "parabol", "en": "a parabola" }
      ],
      "correct": 1,
      "why": { "vi": "pV = const nên p = const/V: đồ thị là nhánh hypebol.", "en": "pV = const means p = const/V, whose graph is a branch of a hyperbola." }
    },
    {
      "q": { "vi": "Định luật Boyle áp dụng được khi", "en": "Boyle's law can be applied when" },
      "options": [
        { "vi": "khối lượng khí không đổi và nhiệt độ không đổi", "en": "the mass of gas is fixed and the temperature is constant" },
        { "vi": "áp suất được giữ không đổi", "en": "the pressure is kept constant" },
        { "vi": "thể tích được giữ không đổi", "en": "the volume is kept constant" },
        { "vi": "khối lượng khí thay đổi nhưng nhiệt độ không đổi", "en": "the mass of gas changes but the temperature is constant" }
      ],
      "correct": 0,
      "why": { "vi": "Định luật chỉ đúng cho một lượng khí xác định trong quá trình đẳng nhiệt.", "en": "The law holds only for a fixed mass of gas in an isothermal process." }
    }
  ]
},
"10": {
  "drafted": false,
  "summary": {
    "vi": "Ở áp suất không đổi, thể tích của một lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối: V/T = hằng số.",
    "en": "At constant pressure the volume of a fixed mass of gas is directly proportional to its absolute temperature: V/T = constant."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Quá trình biến đổi trạng thái trong đó áp suất được giữ không đổi gọi là quá trình đẳng áp. Thí nghiệm với một lượng khí trong ống thuỷ tinh có giọt thuỷ ngân (hoặc pit-tông nhẹ) di chuyển tự do cho thấy: khi nhiệt độ tăng, thể tích khí tăng; đồ thị V theo t (°C) là đường thẳng, kéo dài cắt trục nhiệt độ tại −273 °C. Nếu dùng nhiệt độ tuyệt đối T thì V tỉ lệ thuận với T.",
      "en": "A change of state in which the pressure is kept constant is an isobaric process. An experiment with a gas trapped in a glass tube by a freely moving drop of mercury (or a light piston) shows that the volume grows as the temperature rises; the graph of V against t (°C) is a straight line which, extended, meets the temperature axis at −273 °C. Using the absolute temperature T, V is directly proportional to T."
    },
    {
      "type": "formula",
      "title": { "vi": "Định luật Charles", "en": "Charles's law" },
      "math": "V/T = const   hay   V₁/T₁ = V₂/T₂",
      "vars": [
        { "sym": "V", "vi": "thể tích của khí", "en": "volume of the gas", "unit": "m³" },
        { "sym": "T", "vi": "nhiệt độ tuyệt đối", "en": "absolute temperature", "unit": "K" }
      ],
      "note": {
        "vi": "Khi áp suất của một khối lượng khí xác định giữ không đổi, thể tích của khí tỉ lệ thuận với nhiệt độ tuyệt đối của nó. T bắt buộc tính bằng kelvin.",
        "en": "When the pressure of a fixed mass of gas is kept constant, its volume is directly proportional to its absolute temperature. T must be in kelvin."
      }
    },
    {
      "type": "text",
      "vi": "Đường đẳng áp: trong hệ toạ độ (V, T) là đường thẳng mà đường kéo dài đi qua gốc toạ độ; ứng với áp suất lớn hơn, đường đẳng áp nằm thấp hơn. Từ định luật Charles suy ra ý nghĩa của độ không tuyệt đối: khi T tiến tới 0 K, thể tích khí lí tưởng tiến tới 0, nên không thể có nhiệt độ thấp hơn 0 K.",
      "en": "Isobars: on a (V, T) diagram an isobar is a straight line whose extension passes through the origin; the isobar for a higher pressure lies lower. Charles's law also gives meaning to absolute zero: as T approaches 0 K the volume of an ideal gas approaches zero, so no temperature below 0 K is possible."
    },
    {
      "type": "callout",
      "vi": "Lỗi kinh điển: thay t = 27 °C thẳng vào V₁/T₁. Phải đổi T₁ = 300 K. Nếu đề cho nhiệt độ tăng thêm Δt (°C) thì ΔT (K) bằng đúng Δt.",
      "en": "Classic mistake: putting t = 27 °C straight into V₁/T₁. Convert first: T₁ = 300 K. If the question gives a rise of Δt (°C), the rise in kelvin ΔT is the same number."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Một lượng khí ở 27 °C có thể tích 3 lít. Nung nóng đẳng áp đến 127 °C thì thể tích khí là", "en": "A gas at 27 °C occupies 3 L. Heated at constant pressure to 127 °C, its volume becomes" },
      "options": [
        { "vi": "3 lít", "en": "3 L" },
        { "vi": "4 lít", "en": "4 L" },
        { "vi": "14,1 lít", "en": "14.1 L" },
        { "vi": "9 lít", "en": "9 L" }
      ],
      "correct": 1,
      "why": { "vi": "V₂ = V₁T₂/T₁ = 3 · 400/300 = 4 lít.", "en": "V₂ = V₁T₂/T₁ = 3 × 400/300 = 4 L." }
    },
    {
      "q": { "vi": "Định luật Charles phát biểu: ở áp suất không đổi, thể tích của một lượng khí xác định", "en": "Charles's law states that at constant pressure the volume of a fixed mass of gas" },
      "options": [
        { "vi": "tỉ lệ nghịch với nhiệt độ tuyệt đối", "en": "is inversely proportional to absolute temperature" },
        { "vi": "tỉ lệ thuận với nhiệt độ Celsius", "en": "is directly proportional to Celsius temperature" },
        { "vi": "tỉ lệ thuận với nhiệt độ tuyệt đối", "en": "is directly proportional to absolute temperature" },
        { "vi": "không phụ thuộc nhiệt độ", "en": "does not depend on temperature" }
      ],
      "correct": 2,
      "why": { "vi": "V/T = const với T tính bằng kelvin.", "en": "V/T = const with T in kelvin." }
    },
    {
      "q": { "vi": "Trong hệ toạ độ (V, T), đường đẳng áp là", "en": "On a (V, T) diagram an isobar is" },
      "options": [
        { "vi": "nhánh hypebol", "en": "a branch of a hyperbola" },
        { "vi": "đường thẳng có đường kéo dài đi qua gốc toạ độ", "en": "a straight line whose extension passes through the origin" },
        { "vi": "đường thẳng song song với trục T", "en": "a straight line parallel to the T axis" },
        { "vi": "đường thẳng song song với trục V", "en": "a straight line parallel to the V axis" }
      ],
      "correct": 1,
      "why": { "vi": "V = (const)·T là hàm bậc nhất qua gốc toạ độ.", "en": "V = (const)·T is a linear relation through the origin." }
    }
  ]
},
"11": {
  "drafted": false,
  "summary": {
    "vi": "Kết hợp định luật Boyle và định luật Charles cho phương trình trạng thái pV/T = hằng số; với n mol khí lí tưởng: pV = nRT.",
    "en": "Combining Boyle's and Charles's laws gives the equation of state pV/T = constant; for n moles of ideal gas, pV = nRT."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Xét một lượng khí xác định chuyển từ trạng thái (p₁, V₁, T₁) sang trạng thái (p₂, V₂, T₂) qua hai bước: một quá trình đẳng nhiệt rồi một quá trình đẳng áp. Áp dụng định luật Boyle cho bước thứ nhất và định luật Charles cho bước thứ hai, ta thu được hệ thức liên hệ cả ba thông số trạng thái, gọi là phương trình trạng thái của khí lí tưởng. Hệ quả: khi thể tích không đổi (quá trình đẳng tích), áp suất của khí tỉ lệ thuận với nhiệt độ tuyệt đối: p/T = const.",
      "en": "Take a fixed mass of gas from state (p₁, V₁, T₁) to state (p₂, V₂, T₂) in two steps: an isothermal process followed by an isobaric one. Applying Boyle's law to the first step and Charles's law to the second gives one relation linking all three state variables, the equation of state of an ideal gas. A consequence: at constant volume (isochoric process) the pressure is directly proportional to the absolute temperature, p/T = const."
    },
    {
      "type": "formula",
      "title": { "vi": "Phương trình trạng thái của khí lí tưởng", "en": "Equation of state of an ideal gas" },
      "math": "pV/T = const   hay   p₁V₁/T₁ = p₂V₂/T₂",
      "vars": [
        { "sym": "p", "vi": "áp suất", "en": "pressure", "unit": "Pa" },
        { "sym": "V", "vi": "thể tích", "en": "volume", "unit": "m³" },
        { "sym": "T", "vi": "nhiệt độ tuyệt đối", "en": "absolute temperature", "unit": "K" }
      ],
      "note": {
        "vi": "Áp dụng cho một lượng khí xác định. Cho T₁ = T₂ ta thu lại định luật Boyle; cho p₁ = p₂ ta thu lại định luật Charles.",
        "en": "Applies to a fixed mass of gas. Setting T₁ = T₂ gives back Boyle's law; setting p₁ = p₂ gives back Charles's law."
      }
    },
    {
      "type": "formula",
      "title": { "vi": "Phương trình Clapeyron", "en": "Clapeyron equation (ideal-gas law)" },
      "math": "pV = nRT = (m/M)·R·T",
      "vars": [
        { "sym": "n", "vi": "số mol khí", "en": "amount of gas", "unit": "mol" },
        { "sym": "R", "vi": "hằng số khí lí tưởng", "en": "ideal-gas constant", "unit": "J/(mol·K)" },
        { "sym": "m", "vi": "khối lượng khí", "en": "mass of gas", "unit": "kg" },
        { "sym": "M", "vi": "khối lượng mol", "en": "molar mass", "unit": "kg/mol" }
      ],
      "note": {
        "vi": "R = 8,31 J/(mol·K). Với giá trị này, p phải tính bằng Pa, V bằng m³ và T bằng K.",
        "en": "R = 8.31 J/(mol·K). With this value, p must be in Pa, V in m³ and T in K."
      }
    },
    {
      "type": "table",
      "head": [
        { "vi": "Quá trình", "en": "Process" },
        { "vi": "Điều kiện", "en": "Condition" },
        { "vi": "Hệ thức", "en": "Relation" },
        { "vi": "Đồ thị đặc trưng", "en": "Characteristic graph" }
      ],
      "rows": [
        [ { "vi": "Đẳng nhiệt", "en": "Isothermal" }, { "vi": "T = const", "en": "T = const" }, { "vi": "pV = const", "en": "pV = const" }, { "vi": "hypebol trong (p, V)", "en": "hyperbola on (p, V)" } ],
        [ { "vi": "Đẳng áp", "en": "Isobaric" }, { "vi": "p = const", "en": "p = const" }, { "vi": "V/T = const", "en": "V/T = const" }, { "vi": "đường thẳng qua gốc trong (V, T)", "en": "straight line through origin on (V, T)" } ],
        [ { "vi": "Đẳng tích", "en": "Isochoric" }, { "vi": "V = const", "en": "V = const" }, { "vi": "p/T = const", "en": "p/T = const" }, { "vi": "đường thẳng qua gốc trong (p, T)", "en": "straight line through origin on (p, T)" } ]
      ]
    },
    {
      "type": "callout",
      "vi": "Với pV = nRT có thể giải các bài toán khối lượng khí thay đổi (bơm thêm, xả bớt khí) – điều mà p₁V₁/T₁ = p₂V₂/T₂ không làm được vì nó chỉ đúng cho một lượng khí xác định.",
      "en": "pV = nRT handles problems where the amount of gas changes (pumping in or letting out gas), which p₁V₁/T₁ = p₂V₂/T₂ cannot, since that form holds only for a fixed mass of gas."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Một lượng khí ở trạng thái p₁ = 2 atm, V₁ = 10 lít, T₁ = 300 K chuyển sang trạng thái p₂ = 4 atm, T₂ = 600 K. Thể tích V₂ bằng", "en": "A gas goes from p₁ = 2 atm, V₁ = 10 L, T₁ = 300 K to p₂ = 4 atm, T₂ = 600 K. The volume V₂ is" },
      "options": [
        { "vi": "5 lít", "en": "5 L" },
        { "vi": "10 lít", "en": "10 L" },
        { "vi": "20 lít", "en": "20 L" },
        { "vi": "40 lít", "en": "40 L" }
      ],
      "correct": 1,
      "why": { "vi": "V₂ = p₁V₁T₂/(p₂T₁) = 2 · 10 · 600/(4 · 300) = 10 lít.", "en": "V₂ = p₁V₁T₂/(p₂T₁) = 2 × 10 × 600/(4 × 300) = 10 L." }
    },
    {
      "q": { "vi": "Trong bình kín có thể tích không đổi, khi nhiệt độ tuyệt đối của khí tăng gấp đôi thì áp suất khí", "en": "In a rigid sealed container, when the absolute temperature of the gas doubles, its pressure" },
      "options": [
        { "vi": "giảm một nửa", "en": "halves" },
        { "vi": "không đổi", "en": "stays the same" },
        { "vi": "tăng gấp đôi", "en": "doubles" },
        { "vi": "tăng gấp bốn", "en": "quadruples" }
      ],
      "correct": 2,
      "why": { "vi": "Quá trình đẳng tích: p/T = const nên p tỉ lệ thuận với T.", "en": "Isochoric process: p/T = const, so p is proportional to T." }
    },
    {
      "q": { "vi": "Trong hệ SI, hằng số khí lí tưởng R có giá trị", "en": "In SI units the ideal-gas constant R equals" },
      "options": [
        { "vi": "8,31 J/(mol·K)", "en": "8.31 J/(mol·K)" },
        { "vi": "1,38 × 10⁻²³ J/K", "en": "1.38 × 10⁻²³ J/K" },
        { "vi": "6,02 × 10²³ mol⁻¹", "en": "6.02 × 10²³ mol⁻¹" },
        { "vi": "22,4 lít/mol", "en": "22.4 L/mol" }
      ],
      "correct": 0,
      "why": { "vi": "1,38 × 10⁻²³ J/K là hằng số Boltzmann, 6,02 × 10²³ mol⁻¹ là số Avogadro.", "en": "1.38 × 10⁻²³ J/K is the Boltzmann constant and 6.02 × 10²³ mol⁻¹ the Avogadro constant." }
    }
  ]
},
"12": {
  "drafted": false,
  "summary": {
    "vi": "Áp suất khí sinh ra từ va chạm của các phân tử với thành bình, p = (1/3)μmv̄²; động năng tịnh tiến trung bình của phân tử tỉ lệ thuận với nhiệt độ tuyệt đối, Ē_đ = (3/2)kT.",
    "en": "Gas pressure arises from molecular collisions with the walls, p = (1/3)μmv̄²; the mean translational kinetic energy of a molecule is proportional to absolute temperature, Ē_đ = (3/2)kT."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Mỗi phân tử khí khi va chạm với thành bình truyền cho thành một xung lực nhỏ; vô số va chạm trong mỗi giây tạo nên lực ép trung bình lên thành bình, tức là áp suất của khí. Theo mô hình động học phân tử, áp suất tỉ lệ với mật độ phân tử μ = N/V, với khối lượng m của một phân tử và với trung bình của bình phương tốc độ v̄² của các phân tử. Vì khối lượng riêng ρ = μ·m nên cũng có thể viết p = (1/3)ρv̄².",
      "en": "Each gas molecule that hits the wall gives it a small impulse; the enormous number of hits every second produces a steady average force on the wall, which is the gas pressure. In the kinetic model the pressure is proportional to the number density μ = N/V, to the mass m of one molecule and to the mean square speed v̄² of the molecules. Since the density is ρ = μ·m, this can also be written p = (1/3)ρv̄²."
    },
    {
      "type": "formula",
      "title": { "vi": "Áp suất khí theo mô hình động học phân tử", "en": "Gas pressure from the kinetic model" },
      "math": "p = (1/3)·μ·m·v̄² = (2/3)·μ·Ē_đ",
      "vars": [
        { "sym": "μ", "vi": "mật độ phân tử (số phân tử trong một đơn vị thể tích)", "en": "number density (molecules per unit volume)", "unit": "m⁻³" },
        { "sym": "m", "vi": "khối lượng một phân tử", "en": "mass of one molecule", "unit": "kg" },
        { "sym": "v̄²", "vi": "trung bình của bình phương tốc độ phân tử", "en": "mean square speed of the molecules", "unit": "m²/s²" },
        { "sym": "Ē_đ", "vi": "động năng tịnh tiến trung bình của một phân tử", "en": "mean translational kinetic energy of a molecule", "unit": "J" }
      ],
      "note": {
        "vi": "Ē_đ = (1/2)·m·v̄². Tốc độ căn quân phương v_rms = √(v̄²) là tốc độ đặc trưng cho chuyển động nhiệt của phân tử.",
        "en": "Ē_đ = (1/2)·m·v̄². The root-mean-square speed v_rms = √(v̄²) is the characteristic speed of thermal motion."
      }
    },
    {
      "type": "formula",
      "title": { "vi": "Động năng phân tử và nhiệt độ", "en": "Molecular kinetic energy and temperature" },
      "math": "Ē_đ = (3/2)·k·T",
      "vars": [
        { "sym": "k", "vi": "hằng số Boltzmann", "en": "Boltzmann constant", "unit": "J/K" },
        { "sym": "T", "vi": "nhiệt độ tuyệt đối", "en": "absolute temperature", "unit": "K" }
      ],
      "note": {
        "vi": "k = 1,38 × 10⁻²³ J/K = R/N_A. Nhiệt độ tuyệt đối là số đo động năng tịnh tiến trung bình của phân tử. Ở cùng nhiệt độ, mọi loại khí có cùng động năng trung bình; khí có phân tử nhẹ hơn thì chuyển động nhanh hơn.",
        "en": "k = 1.38 × 10⁻²³ J/K = R/N_A. Absolute temperature is a measure of the mean translational kinetic energy of the molecules. At the same temperature all gases have the same mean kinetic energy; lighter molecules move faster."
      }
    },
    {
      "type": "callout",
      "vi": "Kết hợp hai công thức trên với pV = nRT: v_rms = √(3kT/m) = √(3RT/M). Ở 300 K, phân tử hydrogen (M = 2 g/mol) có v_rms ≈ 1 900 m/s, còn oxygen (M = 32 g/mol) chỉ khoảng 480 m/s.",
      "en": "Combining the two formulas with pV = nRT gives v_rms = √(3kT/m) = √(3RT/M). At 300 K a hydrogen molecule (M = 2 g/mol) has v_rms ≈ 1 900 m/s, while oxygen (M = 32 g/mol) has only about 480 m/s."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Khi nhiệt độ tuyệt đối của khí tăng gấp đôi, động năng tịnh tiến trung bình của phân tử", "en": "When the absolute temperature of a gas doubles, the mean translational kinetic energy of a molecule" },
      "options": [
        { "vi": "không đổi", "en": "stays the same" },
        { "vi": "tăng √2 lần", "en": "increases by a factor of √2" },
        { "vi": "tăng gấp đôi", "en": "doubles" },
        { "vi": "tăng gấp bốn", "en": "quadruples" }
      ],
      "correct": 2,
      "why": { "vi": "Ē_đ = (3/2)kT tỉ lệ thuận với T.", "en": "Ē_đ = (3/2)kT is proportional to T." }
    },
    {
      "q": { "vi": "Động năng tịnh tiến trung bình của một phân tử khí ở 27 °C là (k = 1,38 × 10⁻²³ J/K)", "en": "The mean translational kinetic energy of a gas molecule at 27 °C is (k = 1.38 × 10⁻²³ J/K)" },
      "options": [
        { "vi": "5,59 × 10⁻²² J", "en": "5.59 × 10⁻²² J" },
        { "vi": "6,21 × 10⁻²¹ J", "en": "6.21 × 10⁻²¹ J" },
        { "vi": "4,14 × 10⁻²¹ J", "en": "4.14 × 10⁻²¹ J" },
        { "vi": "1,24 × 10⁻²⁰ J", "en": "1.24 × 10⁻²⁰ J" }
      ],
      "correct": 1,
      "why": { "vi": "T = 300 K: Ē_đ = 1,5 · 1,38 × 10⁻²³ · 300 = 6,21 × 10⁻²¹ J.", "en": "T = 300 K: Ē_đ = 1.5 × 1.38 × 10⁻²³ × 300 = 6.21 × 10⁻²¹ J." }
    },
    {
      "q": { "vi": "Theo mô hình động học phân tử, áp suất của chất khí tỉ lệ thuận với", "en": "According to the kinetic model, the pressure of a gas is proportional to" },
      "options": [
        { "vi": "tốc độ trung bình của phân tử", "en": "the mean speed of the molecules" },
        { "vi": "trung bình của bình phương tốc độ phân tử", "en": "the mean square speed of the molecules" },
        { "vi": "căn bậc hai của nhiệt độ", "en": "the square root of the temperature" },
        { "vi": "thể tích của bình", "en": "the volume of the container" }
      ],
      "correct": 1,
      "why": { "vi": "p = (1/3)μmv̄²: áp suất tỉ lệ với v̄², tức là với động năng trung bình.", "en": "p = (1/3)μmv̄²: pressure is proportional to v̄², i.e. to the mean kinetic energy." }
    }
  ]
},
"14": {
  "drafted": false,
  "summary": {
    "vi": "Từ trường tồn tại xung quanh nam châm và dòng điện, được mô tả bằng các đường sức từ; chiều của từ trường do dòng điện gây ra xác định bằng quy tắc nắm tay phải.",
    "en": "A magnetic field exists around magnets and electric currents and is pictured by field lines; the direction of the field of a current is found with the right-hand grip rule."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Từ trường là một dạng vật chất tồn tại xung quanh nam châm hoặc dòng điện (điện tích chuyển động), biểu hiện ở chỗ nó tác dụng lực từ lên nam châm hay dòng điện khác đặt trong nó. Kim nam châm nhỏ đặt tự do trong từ trường luôn định hướng theo một phương xác định; chiều từ cực Nam sang cực Bắc của kim được quy ước là chiều của từ trường tại điểm đó.",
      "en": "A magnetic field is a form of matter that exists around magnets and electric currents (moving charges); it reveals itself by exerting a magnetic force on any other magnet or current placed in it. A small compass needle free to turn in a magnetic field always settles along a definite direction; the direction from the needle's south pole to its north pole is taken as the direction of the field at that point."
    },
    {
      "type": "text",
      "vi": "Đường sức từ là đường vẽ trong không gian có từ trường sao cho tiếp tuyến tại mỗi điểm trùng với phương của từ trường, chiều là chiều của từ trường tại điểm đó. Qua mỗi điểm chỉ vẽ được một đường sức; các đường sức từ là những đường cong khép kín hoặc vô hạn ở hai đầu; nơi từ trường mạnh đường sức dày, nơi từ trường yếu đường sức thưa. Từ phổ (mạt sắt rắc quanh nam châm) cho hình ảnh trực quan của đường sức từ. Từ trường đều có các đường sức song song, cùng chiều và cách đều nhau, ví dụ ở khoảng giữa hai cực của nam châm hình chữ U.",
      "en": "A magnetic field line is a line drawn so that its tangent at every point is along the field, pointing in the field direction. Only one field line passes through each point; field lines are closed curves or extend to infinity at both ends; they are drawn closer together where the field is stronger and farther apart where it is weaker. Iron filings sprinkled around a magnet give a visible pattern of the field lines. A uniform field has parallel, equally spaced field lines in the same direction, for example between the poles of a U-shaped magnet."
    },
    {
      "type": "table",
      "head": [
        { "vi": "Nguồn từ trường", "en": "Source of field" },
        { "vi": "Dạng đường sức", "en": "Shape of field lines" },
        { "vi": "Cách xác định chiều", "en": "How to find the direction" }
      ],
      "rows": [
        [
          { "vi": "Nam châm thẳng", "en": "Bar magnet" },
          { "vi": "Đường cong đi ra từ cực Bắc, đi vào cực Nam ở bên ngoài nam châm", "en": "Curves leaving the north pole and entering the south pole outside the magnet" },
          { "vi": "Chiều từ cực Bắc sang cực Nam bên ngoài nam châm", "en": "From north to south outside the magnet" }
        ],
        [
          { "vi": "Dòng điện thẳng dài", "en": "Long straight current" },
          { "vi": "Các đường tròn đồng tâm nằm trong mặt phẳng vuông góc với dây", "en": "Concentric circles in planes perpendicular to the wire" },
          { "vi": "Quy tắc nắm tay phải: ngón cái theo chiều dòng điện, các ngón khum lại chỉ chiều đường sức", "en": "Right-hand grip rule: thumb along the current, curled fingers give the field direction" }
        ],
        [
          { "vi": "Ống dây có dòng điện", "en": "Current-carrying solenoid" },
          { "vi": "Bên trong gần như song song, cách đều (từ trường đều); bên ngoài giống nam châm thẳng", "en": "Nearly parallel and evenly spaced inside (uniform field); like a bar magnet outside" },
          { "vi": "Quy tắc nắm tay phải: các ngón khum theo chiều dòng điện, ngón cái chỉ chiều đường sức trong lòng ống (cực Bắc)", "en": "Right-hand grip rule: fingers curl with the current, thumb gives the field inside the coil (north end)" }
        ]
      ]
    },
    {
      "type": "callout",
      "vi": "Trái Đất là một nam châm khổng lồ: cực Bắc của kim la bàn chỉ về phía cực Bắc địa lí, nghĩa là ở gần cực Bắc địa lí thực ra là cực từ Nam của Trái Đất.",
      "en": "The Earth is a giant magnet: the north pole of a compass points toward geographic north, which means the magnetic pole near geographic north is actually a magnetic south pole."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Tính chất cơ bản của từ trường là", "en": "The basic property of a magnetic field is that it" },
      "options": [
        { "vi": "tác dụng lực từ lên nam châm hoặc dòng điện đặt trong nó", "en": "exerts a magnetic force on a magnet or current placed in it" },
        { "vi": "làm nóng mọi vật đặt trong nó", "en": "heats any object placed in it" },
        { "vi": "tác dụng lực lên mọi vật đứng yên", "en": "exerts a force on every object at rest" },
        { "vi": "chỉ tồn tại xung quanh nam châm vĩnh cửu", "en": "exists only around permanent magnets" }
      ],
      "correct": 0,
      "why": { "vi": "Từ trường được nhận biết qua lực từ tác dụng lên nam châm hay dòng điện.", "en": "A magnetic field is detected through the force it exerts on magnets or currents." }
    },
    {
      "q": { "vi": "Đường sức từ của dòng điện thẳng dài có dạng", "en": "The field lines of a long straight current are" },
      "options": [
        { "vi": "những đường thẳng song song với dây", "en": "straight lines parallel to the wire" },
        { "vi": "những đường tròn đồng tâm nằm trong mặt phẳng vuông góc với dây", "en": "concentric circles in planes perpendicular to the wire" },
        { "vi": "những đường xoắn ốc quanh dây", "en": "spirals around the wire" },
        { "vi": "những đường thẳng xuất phát từ dây, vuông góc với dây", "en": "straight lines radiating out from the wire" }
      ],
      "correct": 1,
      "why": { "vi": "Từ phổ của dòng điện thẳng là các vòng tròn đồng tâm có tâm trên dây dẫn.", "en": "The field pattern of a straight current is a set of concentric circles centred on the wire." }
    },
    {
      "q": { "vi": "Ở vùng các đường sức từ được vẽ dày hơn thì", "en": "Where the field lines are drawn closer together," },
      "options": [
        { "vi": "từ trường yếu hơn", "en": "the field is weaker" },
        { "vi": "từ trường mạnh hơn", "en": "the field is stronger" },
        { "vi": "từ trường bằng không", "en": "the field is zero" },
        { "vi": "không kết luận được", "en": "nothing can be concluded" }
      ],
      "correct": 1,
      "why": { "vi": "Mật độ đường sức biểu thị độ mạnh của từ trường.", "en": "The density of field lines represents the strength of the field." }
    }
  ]
},
"15": {
  "drafted": false,
  "summary": {
    "vi": "Đoạn dây dẫn mang dòng điện đặt trong từ trường chịu lực từ F = BILsinα, chiều xác định bằng quy tắc bàn tay trái; cảm ứng từ B đặc trưng cho từ trường về mặt tác dụng lực.",
    "en": "A current-carrying conductor in a magnetic field experiences a force F = BILsinα whose direction follows the left-hand rule; the magnetic flux density B measures the strength of the field."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Đại lượng đặc trưng cho tác dụng lực của từ trường tại mỗi điểm là cảm ứng từ, kí hiệu B, đơn vị tesla (T). Vectơ cảm ứng từ có phương trùng với phương của từ trường (tiếp tuyến với đường sức) và chiều là chiều của từ trường tại điểm đó. Thí nghiệm với đoạn dây dẫn thẳng đặt trong từ trường đều cho thấy lực từ tỉ lệ với cường độ dòng điện I, với chiều dài L của đoạn dây và với sinα, trong đó α là góc giữa chiều dòng điện và vectơ B.",
      "en": "The quantity that describes the force-producing strength of a magnetic field at a point is the magnetic flux density (magnetic induction) B, measured in tesla (T). The vector B lies along the field (tangent to the field line) and points in the field direction. Experiments with a straight conductor in a uniform field show that the magnetic force is proportional to the current I, to the length L of the conductor and to sinα, where α is the angle between the current direction and B."
    },
    {
      "type": "formula",
      "title": { "vi": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện", "en": "Magnetic force on a current-carrying conductor" },
      "math": "F = B·I·L·sinα",
      "vars": [
        { "sym": "F", "vi": "lực từ", "en": "magnetic force", "unit": "N" },
        { "sym": "B", "vi": "cảm ứng từ", "en": "magnetic flux density", "unit": "T" },
        { "sym": "I", "vi": "cường độ dòng điện", "en": "current", "unit": "A" },
        { "sym": "L", "vi": "chiều dài đoạn dây trong từ trường", "en": "length of conductor in the field", "unit": "m" },
        { "sym": "α", "vi": "góc giữa chiều dòng điện và vectơ B", "en": "angle between the current and B", "unit": "°" }
      ],
      "note": {
        "vi": "Lực lớn nhất khi dây vuông góc với B (α = 90°): F = BIL; bằng không khi dây song song với B. Từ đó định nghĩa B = F/(I·L·sinα); 1 T = 1 N/(A·m).",
        "en": "The force is greatest when the conductor is perpendicular to B (α = 90°): F = BIL, and zero when it is parallel to B. This defines B = F/(I·L·sinα); 1 T = 1 N/(A·m)."
      }
    },
    {
      "type": "text",
      "vi": "Quy tắc bàn tay trái: đặt bàn tay trái duỗi thẳng sao cho các đường sức từ xuyên vào lòng bàn tay, chiều từ cổ tay đến các ngón tay là chiều dòng điện I; khi đó ngón tay cái choãi ra 90° chỉ chiều của lực từ F tác dụng lên đoạn dây. Lực từ luôn vuông góc với cả đoạn dây dẫn và vectơ cảm ứng từ.",
      "en": "Left-hand rule: hold the left hand flat so that the field lines enter the palm and the fingers point along the current I; the outstretched thumb then gives the direction of the force F on the conductor. The magnetic force is always perpendicular to both the conductor and the vector B."
    },
    {
      "type": "callout",
      "vi": "Tesla là đơn vị khá lớn: từ trường Trái Đất cỡ 5 × 10⁻⁵ T, nam châm điện mạnh cỡ 1–2 T. Khi tính F nhớ đổi L ra mét, và α là góc giữa dây dẫn với vectơ B, không phải góc với mặt phẳng.",
      "en": "The tesla is a large unit: the Earth's field is about 5 × 10⁻⁵ T, a strong electromagnet 1–2 T. When calculating F convert L to metres, and remember α is the angle between the conductor and B, not with a plane."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Đoạn dây dài 20 cm mang dòng điện 5 A đặt vuông góc với từ trường đều B = 0,1 T. Lực từ tác dụng lên đoạn dây là", "en": "A 20 cm conductor carrying 5 A is placed perpendicular to a uniform field B = 0.1 T. The magnetic force on it is" },
      "options": [
        { "vi": "0,01 N", "en": "0.01 N" },
        { "vi": "0,1 N", "en": "0.1 N" },
        { "vi": "1 N", "en": "1 N" },
        { "vi": "10 N", "en": "10 N" }
      ],
      "correct": 1,
      "why": { "vi": "F = BIL = 0,1 · 5 · 0,2 = 0,1 N.", "en": "F = BIL = 0.1 × 5 × 0.2 = 0.1 N." }
    },
    {
      "q": { "vi": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện bằng không khi đoạn dây", "en": "The magnetic force on a current-carrying conductor is zero when the conductor is" },
      "options": [
        { "vi": "vuông góc với đường sức từ", "en": "perpendicular to the field lines" },
        { "vi": "song song với đường sức từ", "en": "parallel to the field lines" },
        { "vi": "hợp với đường sức từ góc 45°", "en": "at 45° to the field lines" },
        { "vi": "mang dòng điện rất lớn", "en": "carrying a very large current" }
      ],
      "correct": 1,
      "why": { "vi": "Khi α = 0° hoặc 180°, sinα = 0 nên F = 0.", "en": "When α = 0° or 180°, sinα = 0 so F = 0." }
    },
    {
      "q": { "vi": "Trong quy tắc bàn tay trái, ngón cái choãi ra chỉ chiều của", "en": "In the left-hand rule the outstretched thumb gives the direction of" },
      "options": [
        { "vi": "dòng điện", "en": "the current" },
        { "vi": "cảm ứng từ", "en": "the magnetic flux density" },
        { "vi": "lực từ", "en": "the magnetic force" },
        { "vi": "đường sức từ", "en": "the field lines" }
      ],
      "correct": 2,
      "why": { "vi": "Lòng bàn tay hứng đường sức, ngón tay theo dòng điện, ngón cái chỉ lực từ.", "en": "Field lines into the palm, fingers along the current, thumb gives the force." }
    }
  ]
},
"16": {
  "drafted": false,
  "summary": {
    "vi": "Từ thông Φ = BScosα đo số đường sức xuyên qua một diện tích; khi từ thông qua mạch kín biến thiên, trong mạch xuất hiện suất điện động cảm ứng (định luật Faraday) có chiều tuân theo định luật Lenz.",
    "en": "Magnetic flux Φ = BScosα measures the field lines through an area; when the flux through a closed circuit changes, an induced e.m.f. appears (Faraday's law) whose direction follows Lenz's law."
  },
  "blocks": [
    {
      "type": "formula",
      "title": { "vi": "Từ thông", "en": "Magnetic flux" },
      "math": "Φ = B·S·cosα",
      "vars": [
        { "sym": "Φ", "vi": "từ thông qua mặt S", "en": "magnetic flux through the surface", "unit": "Wb" },
        { "sym": "B", "vi": "cảm ứng từ", "en": "magnetic flux density", "unit": "T" },
        { "sym": "S", "vi": "diện tích mặt phẳng", "en": "area of the surface", "unit": "m²" },
        { "sym": "α", "vi": "góc giữa vectơ pháp tuyến n của mặt S và vectơ B", "en": "angle between the normal n to the surface and B", "unit": "°" }
      ],
      "note": {
        "vi": "1 Wb = 1 T·m². Φ lớn nhất khi B vuông góc với mặt S (α = 0), bằng không khi B song song với mặt S. Với khung dây N vòng: Φ = N·B·S·cosα.",
        "en": "1 Wb = 1 T·m². Φ is greatest when B is perpendicular to the surface (α = 0) and zero when B is parallel to it. For a coil of N turns, Φ = N·B·S·cosα."
      }
    },
    {
      "type": "text",
      "vi": "Hiện tượng cảm ứng điện từ: khi từ thông qua một mạch kín biến thiên (do B, S hoặc α thay đổi), trong mạch xuất hiện suất điện động cảm ứng và do đó có dòng điện cảm ứng. Dòng điện cảm ứng chỉ tồn tại trong thời gian từ thông biến thiên. Định luật Lenz: dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông đã sinh ra nó. Khi Φ tăng, từ trường cảm ứng ngược chiều từ trường ngoài; khi Φ giảm, từ trường cảm ứng cùng chiều từ trường ngoài.",
      "en": "Electromagnetic induction: when the flux through a closed circuit changes (because B, S or α changes), an induced e.m.f. appears in the circuit and drives an induced current. The induced current exists only while the flux is changing. Lenz's law: the induced current flows in the direction whose magnetic field opposes the change of flux that produced it. When Φ increases, the induced field is opposite to the external field; when Φ decreases, the induced field is in the same direction as the external field."
    },
    {
      "type": "formula",
      "title": { "vi": "Định luật Faraday về cảm ứng điện từ", "en": "Faraday's law of electromagnetic induction" },
      "math": "e_c = −N·ΔΦ/Δt",
      "vars": [
        { "sym": "e_c", "vi": "suất điện động cảm ứng", "en": "induced e.m.f.", "unit": "V" },
        { "sym": "N", "vi": "số vòng dây của mạch", "en": "number of turns", "unit": "—" },
        { "sym": "ΔΦ", "vi": "độ biến thiên từ thông qua mỗi vòng", "en": "change of flux through one turn", "unit": "Wb" },
        { "sym": "Δt", "vi": "khoảng thời gian biến thiên", "en": "time interval", "unit": "s" }
      ],
      "note": {
        "vi": "Độ lớn của suất điện động cảm ứng tỉ lệ với tốc độ biến thiên của từ thông qua mạch. Dấu trừ thể hiện định luật Lenz. Cường độ dòng điện cảm ứng trong mạch có điện trở R: i = |e_c|/R.",
        "en": "The magnitude of the induced e.m.f. is proportional to the rate of change of flux through the circuit. The minus sign expresses Lenz's law. In a circuit of resistance R the induced current is i = |e_c|/R."
      }
    },
    {
      "type": "callout",
      "vi": "Muốn có dòng điện cảm ứng phải có từ thông biến thiên. Khung dây đứng yên trong từ trường đều, dù từ trường mạnh đến đâu, cũng không có dòng điện cảm ứng.",
      "en": "An induced current needs a changing flux. A coil at rest in a uniform field, however strong, carries no induced current."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Khung dây phẳng có diện tích 0,02 m² đặt trong từ trường đều B = 0,5 T, vectơ pháp tuyến của khung hợp với B góc 60°. Từ thông qua khung là", "en": "A flat coil of area 0.02 m² is in a uniform field B = 0.5 T with its normal at 60° to B. The flux through it is" },
      "options": [
        { "vi": "5 × 10⁻³ Wb", "en": "5 × 10⁻³ Wb" },
        { "vi": "8,7 × 10⁻³ Wb", "en": "8.7 × 10⁻³ Wb" },
        { "vi": "10⁻² Wb", "en": "10⁻² Wb" },
        { "vi": "0,5 Wb", "en": "0.5 Wb" }
      ],
      "correct": 0,
      "why": { "vi": "Φ = BScosα = 0,5 · 0,02 · cos60° = 5 × 10⁻³ Wb.", "en": "Φ = BScosα = 0.5 × 0.02 × cos60° = 5 × 10⁻³ Wb." }
    },
    {
      "q": { "vi": "Từ thông qua mỗi vòng của một cuộn dây 100 vòng giảm đều từ 0,2 Wb về 0 trong 0,1 s. Độ lớn suất điện động cảm ứng trong cuộn dây là", "en": "The flux through each turn of a 100-turn coil falls uniformly from 0.2 Wb to zero in 0.1 s. The magnitude of the induced e.m.f. is" },
      "options": [
        { "vi": "0,2 V", "en": "0.2 V" },
        { "vi": "2 V", "en": "2 V" },
        { "vi": "200 V", "en": "200 V" },
        { "vi": "20 V", "en": "20 V" }
      ],
      "correct": 2,
      "why": { "vi": "|e_c| = N·|ΔΦ|/Δt = 100 · 0,2/0,1 = 200 V.", "en": "|e_c| = N·|ΔΦ|/Δt = 100 × 0.2/0.1 = 200 V." }
    },
    {
      "q": { "vi": "Đưa cực Bắc của nam châm lại gần một vòng dây kín. Dòng điện cảm ứng trong vòng dây sinh ra từ trường", "en": "The north pole of a magnet is moved toward a closed loop. The induced current produces a field that" },
      "options": [
        { "vi": "cùng chiều với từ trường của nam châm", "en": "is in the same direction as the magnet's field" },
        { "vi": "ngược chiều với từ trường của nam châm, đẩy nam châm ra", "en": "opposes the magnet's field and repels the magnet" },
        { "vi": "bằng không", "en": "is zero" },
        { "vi": "vuông góc với từ trường của nam châm", "en": "is perpendicular to the magnet's field" }
      ],
      "correct": 1,
      "why": { "vi": "Từ thông tăng nên theo định luật Lenz từ trường cảm ứng chống lại sự tăng đó, tức ngược chiều từ trường ngoài.", "en": "The flux is increasing, so by Lenz's law the induced field opposes the increase, i.e. it is opposite to the external field." }
    }
  ]
},
"17": {
  "drafted": false,
  "summary": {
    "vi": "Khung dây quay đều trong từ trường đều làm từ thông biến thiên điều hoà, tạo ra suất điện động xoay chiều e = E₀cos(ωt + φ); đó là nguyên tắc của máy phát điện xoay chiều.",
    "en": "A coil rotating uniformly in a uniform magnetic field has a sinusoidally varying flux and produces an alternating e.m.f. e = E₀cos(ωt + φ); this is the principle of the AC generator."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Cho khung dây dẫn phẳng có N vòng, diện tích S quay đều với tốc độ góc ω quanh một trục nằm trong mặt phẳng khung và vuông góc với từ trường đều B. Góc giữa pháp tuyến của khung và B thay đổi theo thời gian, α = ωt + φ₀, nên từ thông qua khung biến thiên điều hoà. Theo định luật Faraday, trong khung xuất hiện suất điện động cảm ứng biến thiên điều hoà cùng tần số: suất điện động xoay chiều. Nối khung với mạch ngoài ta được dòng điện xoay chiều.",
      "en": "A flat coil of N turns and area S rotates uniformly with angular speed ω about an axis lying in its plane and perpendicular to a uniform field B. The angle between the coil's normal and B changes with time, α = ωt + φ₀, so the flux through the coil varies sinusoidally. By Faraday's law an induced e.m.f. that varies sinusoidally at the same frequency appears in the coil: an alternating e.m.f. Connecting the coil to an external circuit gives an alternating current."
    },
    {
      "type": "formula",
      "title": { "vi": "Từ thông và suất điện động xoay chiều", "en": "Flux and alternating e.m.f." },
      "math": "Φ = N·B·S·cos(ωt + φ₀)   →   e = E₀·cos(ωt + φ₀ − π/2),   E₀ = N·B·S·ω",
      "vars": [
        { "sym": "E₀", "vi": "suất điện động cực đại", "en": "peak e.m.f.", "unit": "V" },
        { "sym": "N", "vi": "số vòng dây", "en": "number of turns", "unit": "—" },
        { "sym": "S", "vi": "diện tích một vòng", "en": "area of one turn", "unit": "m²" },
        { "sym": "ω", "vi": "tốc độ góc của khung", "en": "angular speed of the coil", "unit": "rad/s" },
        { "sym": "φ₀", "vi": "pha ban đầu của từ thông", "en": "initial phase of the flux", "unit": "rad" }
      ],
      "note": {
        "vi": "Suất điện động e chậm pha π/2 so với từ thông Φ. Tần số f = ω/(2π) bằng số vòng quay của khung trong một giây (máy có một cặp cực).",
        "en": "The e.m.f. lags the flux by π/2. The frequency f = ω/(2π) equals the number of revolutions per second (for a one-pole-pair machine)."
      }
    },
    {
      "type": "text",
      "vi": "Máy phát điện xoay chiều biến đổi cơ năng thành điện năng, gồm hai bộ phận chính: phần cảm (nam châm) tạo ra từ trường và phần ứng (các cuộn dây) trong đó xuất hiện suất điện động cảm ứng. Bộ phận đứng yên là stato, bộ phận quay là rôto. Nếu rôto là nam châm có p cặp cực quay n vòng/giây thì tần số dòng điện f = n·p; lưới điện Việt Nam có f = 50 Hz.",
      "en": "An AC generator converts mechanical energy into electrical energy. Its two main parts are the field system (magnets), which produces the magnetic field, and the armature (coils), in which the e.m.f. is induced. The stationary part is the stator, the rotating part the rotor. If the rotor is a magnet with p pole pairs turning at n revolutions per second, the frequency is f = n·p; Vietnam's grid uses f = 50 Hz."
    },
    {
      "type": "formula",
      "title": { "vi": "Giá trị hiệu dụng của dòng điện xoay chiều", "en": "Root-mean-square (effective) values" },
      "math": "I = I₀/√2   ;   U = U₀/√2   ;   E = E₀/√2",
      "vars": [
        { "sym": "I", "vi": "cường độ dòng điện hiệu dụng", "en": "r.m.s. current", "unit": "A" },
        { "sym": "I₀", "vi": "cường độ dòng điện cực đại", "en": "peak current", "unit": "A" },
        { "sym": "U", "vi": "điện áp hiệu dụng", "en": "r.m.s. voltage", "unit": "V" },
        { "sym": "U₀", "vi": "điện áp cực đại", "en": "peak voltage", "unit": "V" }
      ],
      "note": {
        "vi": "Giá trị hiệu dụng của dòng xoay chiều bằng cường độ của dòng một chiều gây ra cùng công suất toả nhiệt trên cùng điện trở. Ampe kế và vôn kế xoay chiều chỉ giá trị hiệu dụng: điện áp lưới 220 V là giá trị hiệu dụng, giá trị cực đại là 220√2 ≈ 311 V.",
        "en": "The r.m.s. value of an alternating current equals the steady current that would dissipate the same power in the same resistor. AC ammeters and voltmeters read r.m.s. values: the mains voltage of 220 V is an r.m.s. value; the peak is 220√2 ≈ 311 V."
      }
    },
    {
      "type": "callout",
      "vi": "Tần số của dòng điện xoay chiều chỉ phụ thuộc tốc độ quay (và số cặp cực) của máy phát; số vòng dây N và cảm ứng từ B chỉ làm thay đổi biên độ E₀.",
      "en": "The frequency of the alternating current depends only on the rotation speed (and number of pole pairs) of the generator; the turns N and field B change only the amplitude E₀."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Khung dây 200 vòng, diện tích 0,01 m², quay đều với tốc độ góc 100π rad/s trong từ trường đều B = 0,1 T vuông góc với trục quay. Suất điện động cực đại trong khung là", "en": "A coil of 200 turns and area 0.01 m² rotates at 100π rad/s in a uniform field B = 0.1 T perpendicular to the axis. The peak e.m.f. is" },
      "options": [
        { "vi": "6,28 V", "en": "6.28 V" },
        { "vi": "62,8 V", "en": "62.8 V" },
        { "vi": "20 V", "en": "20 V" },
        { "vi": "200 V", "en": "200 V" }
      ],
      "correct": 1,
      "why": { "vi": "E₀ = NBSω = 200 · 0,1 · 0,01 · 100π ≈ 62,8 V.", "en": "E₀ = NBSω = 200 × 0.1 × 0.01 × 100π ≈ 62.8 V." }
    },
    {
      "q": { "vi": "Dòng điện xoay chiều có biểu thức i = 2√2·cos(100πt) (A). Cường độ hiệu dụng và tần số của dòng điện là", "en": "An alternating current is i = 2√2·cos(100πt) (A). Its r.m.s. value and frequency are" },
      "options": [
        { "vi": "2 A và 50 Hz", "en": "2 A and 50 Hz" },
        { "vi": "2√2 A và 100 Hz", "en": "2√2 A and 100 Hz" },
        { "vi": "2 A và 100π Hz", "en": "2 A and 100π Hz" },
        { "vi": "4 A và 50 Hz", "en": "4 A and 50 Hz" }
      ],
      "correct": 0,
      "why": { "vi": "I = I₀/√2 = 2 A; f = ω/(2π) = 100π/(2π) = 50 Hz.", "en": "I = I₀/√2 = 2 A; f = ω/(2π) = 100π/(2π) = 50 Hz." }
    },
    {
      "q": { "vi": "Trong máy phát điện xoay chiều, bộ phận tạo ra từ trường được gọi là", "en": "In an AC generator the part that produces the magnetic field is called the" },
      "options": [
        { "vi": "phần ứng", "en": "armature" },
        { "vi": "phần cảm", "en": "field system" },
        { "vi": "bộ góp", "en": "commutator" },
        { "vi": "stato", "en": "stator" }
      ],
      "correct": 1,
      "why": { "vi": "Phần cảm là nam châm tạo từ trường; phần ứng là các cuộn dây sinh suất điện động.", "en": "The field system is the magnet that creates the field; the armature is the coils in which the e.m.f. is induced." }
    }
  ]
},
"18": {
  "drafted": false,
  "summary": {
    "vi": "Máy biến áp, dòng điện Foucault và nhiều thiết bị như bếp từ, phanh điện từ hoạt động dựa trên hiện tượng cảm ứng điện từ.",
    "en": "Transformers, eddy currents and devices such as induction cookers and electromagnetic brakes all rely on electromagnetic induction."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Máy biến áp là thiết bị biến đổi điện áp xoay chiều mà không làm thay đổi tần số. Cấu tạo gồm lõi thép (ghép từ các lá thép kĩ thuật điện mỏng, cách điện với nhau) và hai cuộn dây có số vòng khác nhau: cuộn sơ cấp N₁ nối với nguồn, cuộn thứ cấp N₂ nối với tải. Dòng điện xoay chiều trong cuộn sơ cấp tạo ra từ thông biến thiên trong lõi thép; từ thông này xuyên qua cuộn thứ cấp và gây ra ở đó một suất điện động cảm ứng xoay chiều cùng tần số.",
      "en": "A transformer changes an alternating voltage without changing its frequency. It consists of an iron core (built from thin, insulated laminations) and two coils with different numbers of turns: the primary N₁ connected to the supply and the secondary N₂ connected to the load. The alternating current in the primary sets up a changing flux in the core; this flux passes through the secondary and induces an alternating e.m.f. of the same frequency there."
    },
    {
      "type": "formula",
      "title": { "vi": "Máy biến áp lí tưởng", "en": "Ideal transformer" },
      "math": "U₂/U₁ = N₂/N₁   ;   U₁·I₁ = U₂·I₂",
      "vars": [
        { "sym": "U₁, U₂", "vi": "điện áp hiệu dụng ở cuộn sơ cấp, thứ cấp", "en": "r.m.s. voltages across primary and secondary", "unit": "V" },
        { "sym": "N₁, N₂", "vi": "số vòng của cuộn sơ cấp, thứ cấp", "en": "turns of primary and secondary", "unit": "—" },
        { "sym": "I₁, I₂", "vi": "cường độ hiệu dụng trong cuộn sơ cấp, thứ cấp", "en": "r.m.s. currents in primary and secondary", "unit": "A" }
      ],
      "note": {
        "vi": "N₂ > N₁: máy tăng áp; N₂ < N₁: máy hạ áp. Khi truyền tải điện năng đi xa, tăng điện áp lên n lần thì công suất hao phí trên đường dây P_hp = R·P²/U² giảm n² lần.",
        "en": "N₂ > N₁: step-up; N₂ < N₁: step-down. In long-distance transmission, raising the voltage n times cuts the line loss P_loss = R·P²/U² by a factor n²."
      }
    },
    {
      "type": "text",
      "vi": "Dòng điện Foucault (dòng điện xoáy) là dòng điện cảm ứng sinh ra trong khối kim loại chuyển động trong từ trường hoặc đặt trong từ trường biến thiên. Nó làm khối kim loại nóng lên và chịu lực từ cản trở chuyển động. Ứng dụng: bếp từ, lò nung cảm ứng, phanh điện từ. Trong máy biến áp và động cơ điện, dòng Foucault gây hao phí nên lõi thép được ghép từ các lá thép mỏng cách điện.",
      "en": "Eddy (Foucault) currents are induced currents that circulate inside a block of metal moving in a magnetic field or sitting in a changing field. They heat the metal and produce a magnetic force that opposes its motion. Applications: induction cookers, induction furnaces, electromagnetic brakes. In transformers and motors eddy currents waste energy, so cores are laminated from thin insulated sheets."
    },
    {
      "type": "callout",
      "vi": "Bếp từ chỉ làm nóng nồi có đáy bằng vật liệu từ tính (sắt, inox từ tính) vì cần dòng Foucault mạnh trong đáy nồi; nồi nhôm, thuỷ tinh không dùng được.",
      "en": "An induction cooker heats only pans with a magnetic base (iron, magnetic stainless steel) because strong eddy currents must flow in the base; aluminium or glass pans do not work."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Máy biến áp có N₁ = 1 000 vòng, N₂ = 50 vòng, điện áp hiệu dụng ở cuộn sơ cấp là 220 V. Điện áp hiệu dụng ở cuộn thứ cấp để hở là", "en": "A transformer has N₁ = 1 000 turns, N₂ = 50 turns and 220 V r.m.s. across the primary. The open-circuit secondary voltage is" },
      "options": [
        { "vi": "4 400 V", "en": "4 400 V" },
        { "vi": "11 V", "en": "11 V" },
        { "vi": "22 V", "en": "22 V" },
        { "vi": "110 V", "en": "110 V" }
      ],
      "correct": 1,
      "why": { "vi": "U₂ = U₁·N₂/N₁ = 220 · 50/1 000 = 11 V.", "en": "U₂ = U₁·N₂/N₁ = 220 × 50/1 000 = 11 V." }
    },
    {
      "q": { "vi": "Máy biến áp KHÔNG thể", "en": "A transformer CANNOT" },
      "options": [
        { "vi": "tăng điện áp xoay chiều", "en": "step up an alternating voltage" },
        { "vi": "hạ điện áp xoay chiều", "en": "step down an alternating voltage" },
        { "vi": "biến đổi điện áp một chiều không đổi", "en": "change a steady DC voltage" },
        { "vi": "làm thay đổi cường độ dòng điện", "en": "change the current" }
      ],
      "correct": 2,
      "why": { "vi": "Điện áp một chiều không đổi không tạo ra từ thông biến thiên nên không có cảm ứng điện từ.", "en": "A steady DC voltage produces no changing flux, so nothing is induced." }
    },
    {
      "q": { "vi": "Lõi thép của máy biến áp được ghép từ các lá thép mỏng cách điện với nhau nhằm", "en": "The core of a transformer is laminated from thin insulated sheets in order to" },
      "options": [
        { "vi": "tăng khối lượng của máy", "en": "increase the mass of the transformer" },
        { "vi": "giảm dòng điện Foucault gây hao phí", "en": "reduce energy loss from eddy currents" },
        { "vi": "tăng điện áp ở cuộn thứ cấp", "en": "raise the secondary voltage" },
        { "vi": "tăng tần số dòng điện", "en": "raise the frequency" }
      ],
      "correct": 1,
      "why": { "vi": "Các lá thép cách điện chia nhỏ đường đi của dòng Foucault, làm giảm hao phí toả nhiệt.", "en": "Insulated laminations break up the eddy-current paths and cut the heat loss." }
    }
  ]
},
"19": {
  "drafted": true,
  "summary": {
    "vi": "Từ trường biến thiên sinh ra điện trường xoáy và ngược lại; điện từ trường lan truyền trong không gian dưới dạng sóng điện từ với tốc độ ánh sáng.",
    "en": "A changing magnetic field produces a circulating electric field and vice versa; the electromagnetic field travels through space as an electromagnetic wave at the speed of light."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Theo Maxwell, tại nơi có từ trường biến thiên theo thời gian sẽ xuất hiện điện trường xoáy (điện trường có đường sức khép kín); ngược lại, điện trường biến thiên theo thời gian sinh ra từ trường. Điện trường biến thiên và từ trường biến thiên liên quan mật thiết với nhau, là hai mặt của một trường thống nhất gọi là điện từ trường. Điện tích dao động hoặc dòng điện xoay chiều trong ăng-ten tạo ra điện từ trường biến thiên lan truyền ra không gian xung quanh: đó là sóng điện từ.",
      "en": "According to Maxwell, wherever a magnetic field changes with time a circulating electric field (one with closed field lines) appears; conversely, a changing electric field produces a magnetic field. Changing electric and magnetic fields are closely linked, two aspects of a single electromagnetic field. Oscillating charges or an alternating current in an antenna create a changing electromagnetic field that spreads out into space: an electromagnetic wave."
    },
    {
      "type": "text",
      "vi": "Mô hình sóng điện từ: tại mỗi điểm, vectơ cường độ điện trường E và vectơ cảm ứng từ B luôn vuông góc với nhau và cùng vuông góc với phương truyền sóng (sóng ngang); E và B dao động cùng pha, cùng tần số. Sóng điện từ truyền được trong chân không với tốc độ c = 3 × 10⁸ m/s và truyền trong các môi trường vật chất với tốc độ nhỏ hơn. Sóng điện từ mang năng lượng và có thể phản xạ, khúc xạ, giao thoa, nhiễu xạ như ánh sáng, vì ánh sáng chính là sóng điện từ.",
      "en": "The electromagnetic-wave model: at every point the electric field vector E and the magnetic field vector B are perpendicular to each other and both perpendicular to the direction of travel (a transverse wave); E and B oscillate in phase at the same frequency. Electromagnetic waves travel through vacuum at c = 3 × 10⁸ m/s and more slowly through material media. They carry energy and can be reflected, refracted, diffracted and made to interfere, just like light, because light is itself an electromagnetic wave."
    },
    {
      "type": "formula",
      "title": { "vi": "Bước sóng của sóng điện từ trong chân không", "en": "Wavelength of an electromagnetic wave in vacuum" },
      "math": "λ = c·T = c/f",
      "vars": [
        { "sym": "λ", "vi": "bước sóng", "en": "wavelength", "unit": "m" },
        { "sym": "c", "vi": "tốc độ ánh sáng trong chân không", "en": "speed of light in vacuum", "unit": "m/s" },
        { "sym": "T", "vi": "chu kì sóng", "en": "period", "unit": "s" },
        { "sym": "f", "vi": "tần số sóng", "en": "frequency", "unit": "Hz" }
      ],
      "note": {
        "vi": "c = 3 × 10⁸ m/s. Thang sóng điện từ theo bước sóng giảm dần: sóng vô tuyến, tia hồng ngoại, ánh sáng nhìn thấy (0,38–0,76 μm), tia tử ngoại, tia X, tia gamma.",
        "en": "c = 3 × 10⁸ m/s. The electromagnetic spectrum in order of decreasing wavelength: radio waves, infrared, visible light (0.38–0.76 μm), ultraviolet, X-rays, gamma rays."
      }
    },
    {
      "type": "callout",
      "vi": "Lỗi hay gặp: cho rằng E và B vuông pha. Trong sóng điện từ lan truyền, E và B dao động cùng pha tại mỗi điểm; chúng chỉ vuông góc về phương.",
      "en": "Common mistake: thinking E and B are 90° out of phase. In a travelling electromagnetic wave E and B oscillate in phase at each point; they are perpendicular only in direction."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Sóng điện từ có tần số 100 MHz truyền trong chân không có bước sóng", "en": "An electromagnetic wave of frequency 100 MHz in vacuum has a wavelength of" },
      "options": [
        { "vi": "0,3 m", "en": "0.3 m" },
        { "vi": "3 m", "en": "3 m" },
        { "vi": "30 m", "en": "30 m" },
        { "vi": "300 m", "en": "300 m" }
      ],
      "correct": 1,
      "why": { "vi": "λ = c/f = 3 × 10⁸/10⁸ = 3 m.", "en": "λ = c/f = 3 × 10⁸/10⁸ = 3 m." }
    },
    {
      "q": { "vi": "Trong sóng điện từ, vectơ E và vectơ B", "en": "In an electromagnetic wave the vectors E and B" },
      "options": [
        { "vi": "cùng phương và cùng pha", "en": "are parallel and in phase" },
        { "vi": "vuông góc với nhau, vuông góc với phương truyền và dao động cùng pha", "en": "are perpendicular to each other and to the direction of travel, and oscillate in phase" },
        { "vi": "vuông góc với nhau và dao động vuông pha", "en": "are perpendicular and oscillate 90° out of phase" },
        { "vi": "song song với phương truyền sóng", "en": "are parallel to the direction of travel" }
      ],
      "correct": 1,
      "why": { "vi": "Sóng điện từ là sóng ngang, E ⊥ B ⊥ phương truyền, E và B cùng pha.", "en": "An electromagnetic wave is transverse: E ⊥ B ⊥ direction of travel, with E and B in phase." }
    },
    {
      "q": { "vi": "Điện trường xoáy xuất hiện ở nơi có", "en": "A circulating (induced) electric field appears where there is" },
      "options": [
        { "vi": "điện tích đứng yên", "en": "a charge at rest" },
        { "vi": "từ trường không đổi", "en": "a constant magnetic field" },
        { "vi": "từ trường biến thiên theo thời gian", "en": "a magnetic field changing with time" },
        { "vi": "dòng điện không đổi", "en": "a steady current" }
      ],
      "correct": 2,
      "why": { "vi": "Theo Maxwell, từ trường biến thiên sinh ra điện trường xoáy có đường sức khép kín.", "en": "By Maxwell's theory, a changing magnetic field produces an electric field with closed field lines." }
    }
  ]
},
"21": {
  "drafted": false,
  "summary": {
    "vi": "Hạt nhân nguyên tử gồm Z proton và N = A − Z neutron; các hạt nhân có cùng Z nhưng khác N là đồng vị của cùng một nguyên tố.",
    "en": "An atomic nucleus contains Z protons and N = A − Z neutrons; nuclei with the same Z but different N are isotopes of the same element."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Thí nghiệm tán xạ hạt alpha của Rutherford cho thấy nguyên tử có một hạt nhân rất nhỏ (kích thước cỡ 10⁻¹⁴ đến 10⁻¹⁵ m, trong khi nguyên tử cỡ 10⁻¹⁰ m) mang điện tích dương và tập trung gần như toàn bộ khối lượng của nguyên tử. Hạt nhân được tạo bởi các nucleon gồm hai loại: proton mang điện tích +e và neutron không mang điện, khối lượng xấp xỉ nhau (cỡ 1,67 × 10⁻²⁷ kg). Hạt nhân có Z proton (Z là số hiệu nguyên tử, bằng số electron của nguyên tử trung hoà) và N neutron; tổng số nucleon A = Z + N gọi là số khối.",
      "en": "Rutherford's alpha-scattering experiment showed that an atom has a tiny nucleus (about 10⁻¹⁴ to 10⁻¹⁵ m across, while the atom is about 10⁻¹⁰ m) that is positively charged and holds almost all the atom's mass. The nucleus is made of nucleons of two kinds: protons with charge +e and uncharged neutrons, both of mass about 1.67 × 10⁻²⁷ kg. A nucleus has Z protons (Z is the atomic number, equal to the number of electrons in the neutral atom) and N neutrons; the total number of nucleons A = Z + N is the mass number."
    },
    {
      "type": "formula",
      "title": { "vi": "Số neutron và điện tích hạt nhân", "en": "Neutron number and nuclear charge" },
      "math": "N = A − Z   ;   q = +Z·e",
      "vars": [
        { "sym": "A", "vi": "số khối (số nucleon)", "en": "mass number (number of nucleons)", "unit": "—" },
        { "sym": "Z", "vi": "số proton (nguyên tử số)", "en": "proton number (atomic number)", "unit": "—" },
        { "sym": "N", "vi": "số neutron", "en": "neutron number", "unit": "—" },
        { "sym": "e", "vi": "điện tích nguyên tố", "en": "elementary charge", "unit": "C" }
      ],
      "note": {
        "vi": "Kí hiệu hạt nhân: viết số khối A ở phía trên bên trái và số Z ở phía dưới bên trái kí hiệu nguyên tố. Ví dụ hạt nhân ²³⁵U có A = 235, Z = 92, N = 143. Các hạt nhân cùng Z nhưng khác N gọi là đồng vị, như ¹H, ²H, ³H.",
        "en": "Notation: the mass number A is written as a left superscript and Z as a left subscript of the element symbol. For example ²³⁵U has A = 235, Z = 92, N = 143. Nuclei with the same Z but different N are isotopes, such as ¹H, ²H, ³H."
      }
    },
    {
      "type": "formula",
      "title": { "vi": "Bán kính hạt nhân và đơn vị khối lượng nguyên tử", "en": "Nuclear radius and the atomic mass unit" },
      "math": "R ≈ r₀·A^(1/3)",
      "vars": [
        { "sym": "R", "vi": "bán kính hạt nhân", "en": "nuclear radius", "unit": "m" },
        { "sym": "r₀", "vi": "hằng số, r₀ ≈ 1,2 × 10⁻¹⁵ m", "en": "constant, r₀ ≈ 1.2 × 10⁻¹⁵ m", "unit": "m" }
      ],
      "note": {
        "vi": "Thể tích hạt nhân tỉ lệ với A nên khối lượng riêng của mọi hạt nhân gần như bằng nhau (cỡ 10¹⁷ kg/m³). Đơn vị khối lượng nguyên tử: 1 u = 1/12 khối lượng nguyên tử carbon-12 = 1,66054 × 10⁻²⁷ kg ≈ 931,5 MeV/c².",
        "en": "The nuclear volume is proportional to A, so all nuclei have nearly the same density (about 10¹⁷ kg/m³). Atomic mass unit: 1 u = 1/12 of the mass of a carbon-12 atom = 1.66054 × 10⁻²⁷ kg ≈ 931.5 MeV/c²."
      }
    },
    {
      "type": "callout",
      "vi": "Z quyết định nguyên tố hoá học, A quyết định khối lượng hạt nhân. Trong bài tập, số neutron luôn tính bằng A − Z, đừng nhầm với A.",
      "en": "Z determines the chemical element, A the nuclear mass. In problems the neutron number is always A − Z; do not confuse it with A."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Hạt nhân ⁵⁶Fe (Z = 26) có", "en": "The nucleus ⁵⁶Fe (Z = 26) has" },
      "options": [
        { "vi": "26 proton và 56 neutron", "en": "26 protons and 56 neutrons" },
        { "vi": "26 proton và 30 neutron", "en": "26 protons and 30 neutrons" },
        { "vi": "30 proton và 26 neutron", "en": "30 protons and 26 neutrons" },
        { "vi": "56 proton và 26 neutron", "en": "56 protons and 26 neutrons" }
      ],
      "correct": 1,
      "why": { "vi": "N = A − Z = 56 − 26 = 30 neutron.", "en": "N = A − Z = 56 − 26 = 30 neutrons." }
    },
    {
      "q": { "vi": "Các đồng vị của cùng một nguyên tố có", "en": "Isotopes of the same element have" },
      "options": [
        { "vi": "cùng số neutron, khác số proton", "en": "the same neutron number, different proton numbers" },
        { "vi": "cùng số khối", "en": "the same mass number" },
        { "vi": "cùng số proton, khác số neutron", "en": "the same proton number, different neutron numbers" },
        { "vi": "cùng khối lượng hạt nhân", "en": "the same nuclear mass" }
      ],
      "correct": 2,
      "why": { "vi": "Đồng vị có cùng Z (cùng vị trí trong bảng tuần hoàn) nhưng khác N nên khác A.", "en": "Isotopes share Z (the same place in the periodic table) but differ in N and hence in A." }
    },
    {
      "q": { "vi": "Đơn vị khối lượng nguyên tử u được định nghĩa bằng", "en": "The atomic mass unit u is defined as" },
      "options": [
        { "vi": "khối lượng của một proton", "en": "the mass of one proton" },
        { "vi": "1/12 khối lượng nguyên tử carbon-12", "en": "1/12 of the mass of a carbon-12 atom" },
        { "vi": "khối lượng của một nguyên tử hydrogen", "en": "the mass of one hydrogen atom" },
        { "vi": "1/16 khối lượng nguyên tử oxygen-16", "en": "1/16 of the mass of an oxygen-16 atom" }
      ],
      "correct": 1,
      "why": { "vi": "1 u = 1/12 khối lượng nguyên tử ¹²C ≈ 1,66 × 10⁻²⁷ kg.", "en": "1 u = 1/12 of the mass of a ¹²C atom ≈ 1.66 × 10⁻²⁷ kg." }
    }
  ]
},
"22": {
  "drafted": false,
  "summary": {
    "vi": "Năng lượng liên kết E_lk = Δm·c² giữ các nucleon trong hạt nhân; phản ứng hạt nhân như phân hạch, nhiệt hạch toả năng lượng khi tổng khối lượng nghỉ giảm.",
    "en": "The binding energy E_lk = Δm·c² holds the nucleons together; nuclear reactions such as fission and fusion release energy when the total rest mass decreases."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Các nucleon trong hạt nhân liên kết với nhau bởi lực hạt nhân: lực tương tác rất mạnh, không phụ thuộc điện tích và chỉ tác dụng trong phạm vi cỡ 10⁻¹⁵ m. Khối lượng của hạt nhân luôn nhỏ hơn tổng khối lượng các nucleon tạo thành nó; hiệu này gọi là độ hụt khối. Theo hệ thức Einstein E = mc², độ hụt khối ứng với năng lượng liên kết – năng lượng cần cung cấp để tách hạt nhân thành các nucleon riêng rẽ. Năng lượng liên kết riêng E_lk/A đặc trưng cho mức độ bền vững của hạt nhân: các hạt nhân có số khối trung bình (A từ 50 đến 95) bền vững nhất, với E_lk/A cỡ 8,8 MeV/nucleon.",
      "en": "Nucleons are held together by the nuclear force: a very strong interaction that does not depend on charge and acts only over about 10⁻¹⁵ m. The mass of a nucleus is always less than the total mass of its separate nucleons; the difference is the mass defect. By Einstein's relation E = mc², the mass defect corresponds to the binding energy, the energy needed to split the nucleus into separate nucleons. The binding energy per nucleon E_lk/A measures how stable a nucleus is: nuclei of medium mass number (A from 50 to 95) are the most stable, with E_lk/A about 8.8 MeV per nucleon."
    },
    {
      "type": "formula",
      "title": { "vi": "Độ hụt khối và năng lượng liên kết", "en": "Mass defect and binding energy" },
      "math": "Δm = Z·m_p + (A − Z)·m_n − m_hn   ;   E_lk = Δm·c²   ;   E_lk riêng = E_lk/A",
      "vars": [
        { "sym": "Δm", "vi": "độ hụt khối", "en": "mass defect", "unit": "u" },
        { "sym": "m_p, m_n", "vi": "khối lượng proton, neutron", "en": "proton and neutron masses", "unit": "u" },
        { "sym": "m_hn", "vi": "khối lượng hạt nhân", "en": "mass of the nucleus", "unit": "u" },
        { "sym": "E_lk", "vi": "năng lượng liên kết", "en": "binding energy", "unit": "MeV" }
      ],
      "note": {
        "vi": "Nếu Δm tính bằng u thì E_lk = Δm · 931,5 MeV (vì 1 u·c² = 931,5 MeV).",
        "en": "If Δm is in u, then E_lk = Δm × 931.5 MeV (since 1 u·c² = 931.5 MeV)."
      }
    },
    {
      "type": "text",
      "vi": "Phản ứng hạt nhân là quá trình biến đổi các hạt nhân, tuân theo các định luật bảo toàn điện tích, số nucleon, năng lượng toàn phần và động lượng (khối lượng nghỉ không bảo toàn). Năng lượng toả ra W = (m_trước − m_sau)·c²; W > 0 là phản ứng toả năng lượng. Phân hạch: hạt nhân rất nặng (²³⁵U, ²³⁹Pu) hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân nhẹ hơn kèm 2–3 neutron mới, toả năng lượng cỡ 200 MeV. Nhiệt hạch: hai hạt nhân rất nhẹ (²H, ³H) tổng hợp thành hạt nhân nặng hơn ở nhiệt độ hàng chục triệu độ; đó là nguồn năng lượng của Mặt Trời và các ngôi sao.",
      "en": "A nuclear reaction transforms nuclei and obeys conservation of charge, of nucleon number, of total energy and of momentum (rest mass is not conserved). The energy released is W = (m_before − m_after)·c²; W > 0 means energy is released. Fission: a very heavy nucleus (²³⁵U, ²³⁹Pu) absorbs a slow neutron and splits into two lighter nuclei plus 2–3 new neutrons, releasing about 200 MeV. Fusion: two very light nuclei (²H, ³H) combine into a heavier nucleus at temperatures of tens of millions of degrees; this powers the Sun and the stars."
    },
    {
      "type": "callout",
      "vi": "Phản ứng toả năng lượng khi các hạt nhân tạo thành có năng lượng liên kết riêng lớn hơn (bền hơn) các hạt nhân ban đầu; điều này đúng cho cả phân hạch lẫn nhiệt hạch.",
      "en": "A reaction releases energy when the product nuclei have a larger binding energy per nucleon (are more stable) than the initial ones; this holds for both fission and fusion."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Hạt nhân ⁴He có độ hụt khối 0,0304 u. Năng lượng liên kết của nó là (1 u = 931,5 MeV/c²)", "en": "The ⁴He nucleus has a mass defect of 0.0304 u. Its binding energy is (1 u = 931.5 MeV/c²)" },
      "options": [
        { "vi": "7,08 MeV", "en": "7.08 MeV" },
        { "vi": "28,3 MeV", "en": "28.3 MeV" },
        { "vi": "56,6 MeV", "en": "56.6 MeV" },
        { "vi": "0,0304 MeV", "en": "0.0304 MeV" }
      ],
      "correct": 1,
      "why": { "vi": "E_lk = 0,0304 · 931,5 ≈ 28,3 MeV (7,08 MeV là năng lượng liên kết riêng).", "en": "E_lk = 0.0304 × 931.5 ≈ 28.3 MeV (7.08 MeV is the binding energy per nucleon)." }
    },
    {
      "q": { "vi": "Đại lượng đặc trưng cho mức độ bền vững của hạt nhân là", "en": "The quantity that measures how stable a nucleus is, is the" },
      "options": [
        { "vi": "độ hụt khối", "en": "mass defect" },
        { "vi": "năng lượng liên kết", "en": "binding energy" },
        { "vi": "năng lượng liên kết riêng", "en": "binding energy per nucleon" },
        { "vi": "số khối", "en": "mass number" }
      ],
      "correct": 2,
      "why": { "vi": "Hạt nhân có năng lượng liên kết riêng càng lớn thì càng bền vững.", "en": "The larger the binding energy per nucleon, the more stable the nucleus." }
    },
    {
      "q": { "vi": "Trong phản ứng hạt nhân, đại lượng nào sau đây KHÔNG được bảo toàn?", "en": "Which of the following is NOT conserved in a nuclear reaction?" },
      "options": [
        { "vi": "Điện tích", "en": "Charge" },
        { "vi": "Số nucleon", "en": "Nucleon number" },
        { "vi": "Khối lượng nghỉ", "en": "Rest mass" },
        { "vi": "Năng lượng toàn phần", "en": "Total energy" }
      ],
      "correct": 2,
      "why": { "vi": "Khối lượng nghỉ thay đổi, phần chênh lệch chuyển thành năng lượng theo E = mc².", "en": "Rest mass changes; the difference appears as energy according to E = mc²." }
    }
  ]
},
"23": {
  "drafted": false,
  "summary": {
    "vi": "Phóng xạ là quá trình hạt nhân không bền tự phát phân rã, phát ra tia α, β hoặc γ; số hạt nhân chưa phân rã giảm theo hàm mũ với chu kì bán rã T.",
    "en": "Radioactivity is the spontaneous decay of unstable nuclei with emission of α, β or γ radiation; the number of undecayed nuclei falls exponentially with half-life T."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Phóng xạ là hiện tượng một hạt nhân không bền vững tự phát phân rã, phát ra các tia phóng xạ và biến đổi thành hạt nhân khác. Quá trình này có tính ngẫu nhiên: không thể biết trước một hạt nhân cụ thể phân rã lúc nào, và không phụ thuộc các yếu tố bên ngoài như nhiệt độ, áp suất.",
      "en": "Radioactivity is the spontaneous decay of an unstable nucleus, which emits radiation and turns into a different nucleus. The process is random: nobody can predict when a particular nucleus will decay, and it is unaffected by external conditions such as temperature or pressure."
    },
    {
      "type": "table",
      "head": [
        { "vi": "Tia", "en": "Radiation" },
        { "vi": "Bản chất", "en": "Nature" },
        { "vi": "Tính chất", "en": "Properties" }
      ],
      "rows": [
        [
          { "vi": "α", "en": "α" },
          { "vi": "dòng hạt nhân ⁴He, điện tích +2e", "en": "stream of ⁴He nuclei, charge +2e" },
          { "vi": "tốc độ cỡ 2 × 10⁷ m/s; ion hoá mạnh, đâm xuyên yếu (tờ giấy chặn được); lệch trong điện trường và từ trường", "en": "speed about 2 × 10⁷ m/s; strongly ionising, weakly penetrating (stopped by paper); deflected by electric and magnetic fields" }
        ],
        [
          { "vi": "β⁻, β⁺", "en": "β⁻, β⁺" },
          { "vi": "dòng electron (β⁻) hoặc positron (β⁺)", "en": "stream of electrons (β⁻) or positrons (β⁺)" },
          { "vi": "tốc độ gần bằng c; đâm xuyên mạnh hơn α (xuyên qua lá nhôm vài mm); lệch trong điện trường và từ trường, ngược chiều nhau", "en": "speed close to c; more penetrating than α (passes through a few mm of aluminium); deflected by fields, in opposite directions" }
        ],
        [
          { "vi": "γ", "en": "γ" },
          { "vi": "sóng điện từ có bước sóng rất ngắn (dưới 10⁻¹¹ m)", "en": "electromagnetic wave of very short wavelength (below 10⁻¹¹ m)" },
          { "vi": "không mang điện nên không lệch trong điện trường, từ trường; đâm xuyên rất mạnh (cần chì dày để chặn); thường đi kèm phân rã α hoặc β", "en": "uncharged, so not deflected by fields; very penetrating (needs thick lead); usually accompanies α or β decay" }
        ]
      ]
    },
    {
      "type": "formula",
      "title": { "vi": "Định luật phóng xạ", "en": "Law of radioactive decay" },
      "math": "N = N₀·2^(−t/T) = N₀·e^(−λt)   ;   λ = ln2/T",
      "vars": [
        { "sym": "N", "vi": "số hạt nhân chưa phân rã ở thời điểm t", "en": "number of undecayed nuclei at time t", "unit": "—" },
        { "sym": "N₀", "vi": "số hạt nhân ban đầu", "en": "initial number of nuclei", "unit": "—" },
        { "sym": "T", "vi": "chu kì bán rã", "en": "half-life", "unit": "s" },
        { "sym": "λ", "vi": "hằng số phóng xạ", "en": "decay constant", "unit": "s⁻¹" }
      ],
      "note": {
        "vi": "Chu kì bán rã T là thời gian để một nửa số hạt nhân phân rã. Khối lượng chất phóng xạ m và độ phóng xạ H = λN (đơn vị becquerel, Bq; 1 Ci = 3,7 × 10¹⁰ Bq) cũng giảm theo cùng quy luật. Số hạt nhân đã phân rã: ΔN = N₀·(1 − 2^(−t/T)).",
        "en": "The half-life T is the time for half of the nuclei to decay. The mass m of the radioactive substance and the activity H = λN (unit becquerel, Bq; 1 Ci = 3.7 × 10¹⁰ Bq) fall by the same law. Number of nuclei that have decayed: ΔN = N₀·(1 − 2^(−t/T))."
      }
    },
    {
      "type": "callout",
      "vi": "Sau k chu kì bán rã còn lại N₀/2ᵏ: sau 3T còn 1/8, đã phân rã 7/8. Chu kì bán rã là hằng số của mỗi chất, không thể thay đổi bằng cách đốt nóng hay nén.",
      "en": "After k half-lives N₀/2ᵏ remains: after 3T one eighth is left and seven eighths have decayed. The half-life is a constant of each substance and cannot be changed by heating or compression."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Một chất phóng xạ có chu kì bán rã 8 ngày. Sau 24 ngày, phần trăm số hạt nhân đã phân rã là", "en": "A radioactive substance has a half-life of 8 days. After 24 days the percentage of nuclei that have decayed is" },
      "options": [
        { "vi": "12,5%", "en": "12.5%" },
        { "vi": "25%", "en": "25%" },
        { "vi": "75%", "en": "75%" },
        { "vi": "87,5%", "en": "87.5%" }
      ],
      "correct": 3,
      "why": { "vi": "24 ngày = 3T nên còn lại 1/8 = 12,5%, đã phân rã 87,5%.", "en": "24 days = 3T, so 1/8 = 12.5% remains and 87.5% has decayed." }
    },
    {
      "q": { "vi": "Tia phóng xạ không bị lệch trong điện trường và từ trường là", "en": "The radiation that is not deflected by electric or magnetic fields is" },
      "options": [
        { "vi": "tia α", "en": "α radiation" },
        { "vi": "tia β⁻", "en": "β⁻ radiation" },
        { "vi": "tia β⁺", "en": "β⁺ radiation" },
        { "vi": "tia γ", "en": "γ radiation" }
      ],
      "correct": 3,
      "why": { "vi": "Tia γ là sóng điện từ, không mang điện tích.", "en": "γ rays are electromagnetic waves and carry no charge." }
    },
    {
      "q": { "vi": "Hằng số phóng xạ λ liên hệ với chu kì bán rã T theo hệ thức", "en": "The decay constant λ is related to the half-life T by" },
      "options": [
        { "vi": "λ = T·ln2", "en": "λ = T·ln2" },
        { "vi": "λ = ln2/T", "en": "λ = ln2/T" },
        { "vi": "λ = 1/T", "en": "λ = 1/T" },
        { "vi": "λ = 2T", "en": "λ = 2T" }
      ],
      "correct": 1,
      "why": { "vi": "Từ N₀/2 = N₀e^(−λT) suy ra λT = ln2.", "en": "From N₀/2 = N₀e^(−λT) it follows that λT = ln2." }
    }
  ]
},
"24": {
  "drafted": true,
  "summary": {
    "vi": "Năng lượng hạt nhân được khai thác trong nhà máy điện hạt nhân, còn đồng vị phóng xạ được ứng dụng rộng rãi trong y học, công nghiệp, nông nghiệp; đi kèm là các yêu cầu về an toàn phóng xạ.",
    "en": "Nuclear energy is harnessed in nuclear power plants, and radioactive isotopes are widely used in medicine, industry and agriculture, all under strict radiation-safety rules."
  },
  "blocks": [
    {
      "type": "text",
      "vi": "Lò phản ứng hạt nhân duy trì phản ứng phân hạch dây chuyền có điều khiển. Nhiên liệu thường là uranium làm giàu (tăng tỉ lệ ²³⁵U); chất làm chậm (nước, than chì) làm neutron chậm lại để dễ gây phân hạch; các thanh điều khiển (chứa bo hoặc cadmium) hấp thụ neutron để giữ hệ số nhân neutron k = 1, tức mỗi phân hạch chỉ gây ra đúng một phân hạch tiếp theo; chất tải nhiệt đưa nhiệt ra ngoài để tạo hơi nước quay tua-bin của máy phát điện. Nhà máy điện hạt nhân không phát thải khí nhà kính khi vận hành nhưng tạo ra chất thải phóng xạ phải lưu giữ an toàn lâu dài.",
      "en": "A nuclear reactor sustains a controlled fission chain reaction. The fuel is usually enriched uranium (with a higher share of ²³⁵U); a moderator (water, graphite) slows the neutrons so that they cause fission more readily; control rods (containing boron or cadmium) absorb neutrons to keep the neutron multiplication factor k = 1, so that each fission triggers exactly one more; a coolant carries the heat away to make steam that drives the turbine of a generator. A nuclear power plant emits no greenhouse gases in operation but produces radioactive waste that must be stored safely for a very long time."
    },
    {
      "type": "table",
      "head": [
        { "vi": "Lĩnh vực", "en": "Field" },
        { "vi": "Ứng dụng tiêu biểu", "en": "Typical applications" }
      ],
      "rows": [
        [
          { "vi": "Y học", "en": "Medicine" },
          { "vi": "xạ trị ung thư (nguồn ⁶⁰Co, máy gia tốc); chẩn đoán bằng đồng vị đánh dấu (xạ hình, chụp PET); khử trùng dụng cụ y tế", "en": "cancer radiotherapy (⁶⁰Co sources, accelerators); diagnosis with tracer isotopes (scintigraphy, PET scans); sterilising medical equipment" }
        ],
        [
          { "vi": "Công nghiệp", "en": "Industry" },
          { "vi": "đo độ dày, mật độ vật liệu; dò khuyết tật mối hàn bằng tia γ; đo mức chất lỏng trong bồn kín", "en": "measuring thickness and density; detecting weld flaws with γ rays; gauging liquid levels in sealed tanks" }
        ],
        [
          { "vi": "Nông nghiệp", "en": "Agriculture" },
          { "vi": "chiếu xạ tạo giống đột biến; diệt khuẩn, bảo quản nông sản; dùng đồng vị đánh dấu nghiên cứu sự hấp thụ phân bón", "en": "irradiation to breed new varieties; sterilising and preserving produce; tracer isotopes to study fertiliser uptake" }
        ],
        [
          { "vi": "Khảo cổ, địa chất", "en": "Archaeology, geology" },
          { "vi": "xác định tuổi mẫu vật bằng ¹⁴C (T ≈ 5 730 năm) và các đồng vị khác", "en": "dating samples with ¹⁴C (T ≈ 5 730 years) and other isotopes" }
        ]
      ]
    },
    {
      "type": "text",
      "vi": "An toàn phóng xạ: tia phóng xạ ion hoá vật chất, có thể phá huỷ tế bào và gây đột biến. Ba nguyên tắc bảo vệ là giữ khoảng cách xa nguồn, giảm thời gian tiếp xúc và dùng vật liệu che chắn (chì, bê tông). Người làm việc với nguồn phóng xạ phải đeo liều kế, tuân thủ biển cảnh báo và các quy định về lưu giữ, vận chuyển, xử lí chất thải phóng xạ.",
      "en": "Radiation safety: nuclear radiation ionises matter and can destroy cells and cause mutations. The three rules of protection are distance from the source, limited exposure time and shielding (lead, concrete). People who work with radioactive sources must wear dosimeters, obey warning signs and follow the regulations on storing, transporting and disposing of radioactive waste."
    },
    {
      "type": "callout",
      "vi": "Phân biệt phân hạch có điều khiển (k = 1, lò phản ứng) với phân hạch không điều khiển (k > 1, bom nguyên tử). Nhiệt hạch có điều khiển để phát điện vẫn đang được nghiên cứu (dự án ITER).",
      "en": "Distinguish controlled fission (k = 1, a reactor) from uncontrolled fission (k > 1, an atomic bomb). Controlled fusion for electricity is still under development (the ITER project)."
    }
  ],
  "selfcheck": [
    {
      "q": { "vi": "Trong lò phản ứng hạt nhân, các thanh điều khiển có tác dụng", "en": "In a nuclear reactor the control rods" },
      "options": [
        { "vi": "làm chậm neutron", "en": "slow down the neutrons" },
        { "vi": "hấp thụ bớt neutron để khống chế phản ứng dây chuyền", "en": "absorb neutrons to regulate the chain reaction" },
        { "vi": "tải nhiệt ra ngoài lò", "en": "carry heat out of the core" },
        { "vi": "cung cấp thêm neutron cho lò", "en": "supply extra neutrons" }
      ],
      "correct": 1,
      "why": { "vi": "Thanh bo hoặc cadmium hấp thụ neutron; đẩy vào sâu thì phản ứng chậm lại, rút ra thì phản ứng mạnh lên.", "en": "Boron or cadmium rods absorb neutrons; pushing them in slows the reaction, pulling them out speeds it up." }
    },
    {
      "q": { "vi": "Phản ứng dây chuyền được duy trì ổn định trong lò phản ứng khi hệ số nhân neutron k", "en": "A chain reaction runs steadily in a reactor when the neutron multiplication factor k is" },
      "options": [
        { "vi": "nhỏ hơn 1", "en": "less than 1" },
        { "vi": "bằng 1", "en": "equal to 1" },
        { "vi": "lớn hơn 1", "en": "greater than 1" },
        { "vi": "bằng 0", "en": "zero" }
      ],
      "correct": 1,
      "why": { "vi": "k = 1: số phân hạch mỗi giây không đổi; k < 1 phản ứng tắt dần, k > 1 bùng nổ.", "en": "k = 1 keeps the fission rate constant; k < 1 dies out, k > 1 runs away." }
    },
    {
      "q": { "vi": "Để xác định tuổi của một mẫu gỗ cổ, người ta dùng đồng vị phóng xạ", "en": "To date an ancient piece of wood, one uses the radioactive isotope" },
      "options": [
        { "vi": "⁶⁰Co", "en": "⁶⁰Co" },
        { "vi": "²³⁵U", "en": "²³⁵U" },
        { "vi": "¹⁴C", "en": "¹⁴C" },
        { "vi": "¹³¹I", "en": "¹³¹I" }
      ],
      "correct": 2,
      "why": { "vi": "Sinh vật ngừng hấp thụ ¹⁴C khi chết; tỉ lệ ¹⁴C còn lại cho biết thời gian đã trôi qua.", "en": "An organism stops taking in ¹⁴C when it dies; the remaining ¹⁴C fraction gives the elapsed time." }
    }
  ]
}
}
;
