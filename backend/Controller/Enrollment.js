const Enrollment = require('../Models/database/enrollment');

// Controller to edite enrollment
exports.enrollUser = async (req, res) => {
  const { courseId, userId } = req.body; // get user id from user

  try {
    const enrollment = new Enrollment({
      status: 'pending', 
      user: userId,
      course: courseId,
    });

    await enrollment.save();
    res.status(201).json({ message: 'Enrollment successful', enrollment });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Enrollment failed', error });
  }
};

// control valid cancel
exports.updateEnrollmentStatus = async (req, res) => {
  const { id } = req.params; 
  const { action } = req.body; //action accept or no

  try {
    const enrollment = await Enrollment.findById(id);
    
    

    if (action === 'approved') {
      enrollment.status = 'approved';
    } else if (action === 'canceled') {
      enrollment.status = 'canceled';
    }

    await enrollment.save();
    res.json({ message: `Enrollment ${action} successfully`, enrollment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating enrollment', error });
  }
};


exports.getpending = async (req, res) => {
  
  try {
    
    res.json(  data );
  } catch (error) {
    res.status(500).json({ message: 'Error geting pending', error });
  }
};