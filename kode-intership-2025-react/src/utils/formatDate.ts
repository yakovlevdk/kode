export function formatDate(dateString: string): string {
    const months: string[] = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
  
    const date: Date = new Date(dateString + "T00:00:00");
    
    if (isNaN(date.getTime())) {
      throw new Error("Неверный формат даты");
    }
  
    const day: number = date.getDate();
    const month: string = months[date.getMonth()]; 
    const year: number = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
  export function calculateAge(birthDateString: string): number {
    const birthDate: Date = new Date(birthDateString + "T00:00:00");
    
    if (isNaN(birthDate.getTime())) {
      throw new Error("Неверный формат даты рождения");
    }
  
    const today: Date = new Date();
    let age: number = today.getFullYear() - birthDate.getFullYear();
    
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }