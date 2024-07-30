function calculate() {
    // กำหนดค่าพายเป็น 3.14
    const pi = 3.14;
    
    // ดึงค่ารัศมีจากช่อง input
    const radius = document.getElementById('radius').value;
    
    // คำนวณพื้นที่และเส้นรอบวง
    const area = pi * radius * radius;
    const circumference = 2 * pi * radius;
    
    // แสดงผลลัพธ์
    document.getElementById('areaResult').textContent = area.toFixed(2);
    document.getElementById('circumferenceResult').textContent = circumference.toFixed(2);
}