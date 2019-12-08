import Enrollment from '../models/Enrollment';

class EnrollmentController {
  async store(req, res) {
    const enrollment = await Enrollment.create(req.body);

    return res.json(enrollment);
  }
}

export default new EnrollmentController();
