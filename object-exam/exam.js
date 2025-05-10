export class Exam {
  constructor(answer, weight) {
    this.correctAnswers = answer.values;
    this.weights = weight;
    this.scores = [];
  }

  add(exam) {
    let score = 0;
    for (const question of Object.keys(exam.values)) {
      if (exam.values[question] === this.correctAnswers[question]) {
        score += this.weights[question];
      }
    }
    this.scores.push(score);
  }

  avg() {
    if (this.scores.length === 0) return 0;
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
  }

  min() {
    if (this.scores.length === 0) return [];
    return [Math.min(...this.scores)];
  }

  max() {
    if (this.scores.length === 0) return [];
    return [Math.max(...this.scores)];
  }

  lt(limit) {
    return this.scores.filter(score => score < limit);
  }

  gt(limit) {
    return this.scores.filter(score => score > limit);
  }
}