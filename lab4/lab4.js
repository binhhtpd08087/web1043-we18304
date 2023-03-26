class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getCurrentAgeInYears() {
      const today = new Date();
      const dob = new Date(this.dob);
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    }
  
    getCurrentAgeInDays() {
      const today = new Date();
      const dob = new Date(this.dob);
      const diff = today - dob;
      const oneDay = 24 * 60 * 60 * 1000; // giờ*phút*giây*mili giây
      return Math.round(diff / oneDay);
    }
  }
  
  // Tạo danh sách sinh viên
  const students = [
    new Student(1, "Binh", "Ho", "A1", "hoanguyen@gmail.com", "123456789", "1995/10/05"),
    new Student(2, "Nam", "Tran", "A1", "namtran@gmail.com", "234567890", "1998/07/23"),
    new Student(3, "Anh", "Le", "A1", "anhle@gmail.com", "345678901", "1997/03/01"),
    new Student(4, "Binh", "Vu", "A2", "binhvu@gmail.com", "456789012", "1996/11/15"),
    new Student(5, "Cuong", "Doan", "A2", "cuongdoan@gmail.com", "567890123", "1999/02/18")
  ];
  
  // Sắp xếp danh sách sinh viên theo tuổi tăng dần
  students.sort((a, b) => a.getCurrentAgeInDays() - b.getCurrentAgeInDays());
  
  // In ra danh sách sinh viên
  students.forEach((student) => {
    console.log(`${student.getFullName()} - Tuổi: ${student.getCurrentAgeInYears()} tuổi (${student.getCurrentAgeInDays()} ngày)`);
  });
  
  // In ra thông tin width và height của màn hình
  console.log(`Width: ${window.innerWidth} - Height: ${window.innerHeight}`);