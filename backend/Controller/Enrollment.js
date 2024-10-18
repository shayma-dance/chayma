const Enrollment = require("../Models/database/enrollment");

exports.enrollUser = async (req, res) => {
  const { courseId, userId } = req.body; 
  try {
    const enrollment = new Enrollment({
      status: "pending",
      user: userId,
      course: courseId,
    });

    await enrollment.save();
    res.status(201).json({ message: "Enrollment successful", enrollment });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Enrollment failed", error });
  }
};

exports.updateEnrollmentStatus = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  try {
    const enrollment = await Enrollment.findById(id);

    if (action === "approved") {
      enrollment.status = "approved";
    } else if (action === "canceled") {
      enrollment.status = "canceled";
    }

    await enrollment.save();
    res.json({ message: `Enrollment ${action} successfully`, enrollment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating enrollment", error });
  }
};

exports.getpending = async (req, res) => {
  try {
    const coachId = req.params.coachId;

    const pendingEnrollments = await Enrollment.find({ status: "pending" })
      .populate({
        path: "course",
        match: { coach: coachId },
        select: "_id title",
      })
      .populate("user", "name email")
      .exec();

    const filteredEnrollments = pendingEnrollments.filter(
      (enrollment) => enrollment.user !== null
    );

    res.status(200).json(filteredEnrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error });
  }
};
exports.enrolledOrNot = async (req, res) => {
  try {
    const enrollornot = await Enrollment.findOne({
      user: req.body.user,
      course: req.body.course,
    });

    res.status(200).json(enrollornot);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses", error: err });
  }
};
exports.approved = async (req, res) => {
  try {
    const coachId = req.params.coachId;

    const pendingEnrollments = await Enrollment.find({ status: "approved" })
      .populate({
        path: "course",
        match: { coach: coachId },
        select: "_id title",
      })
      .populate("user", "name email")
      .exec();

    const filteredEnrollments = pendingEnrollments.filter(
      (enrollment) => enrollment.user !== null
    );

    res.status(200).json(filteredEnrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error });
  }
};
exports.approvedCourses = async (req, res) => {
  try {
    const userId = req.params.userId;

    const enrollments = await Enrollment.find({ status: "approved" })
      .populate({
        path: "user",
        match: { user: userId },
        select: "_id name",
      })
      .populate("course", "title imageUrl description")
      .exec();


    res.status(200).json(enrollments);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error fetching enrollments", error });
  }
};
