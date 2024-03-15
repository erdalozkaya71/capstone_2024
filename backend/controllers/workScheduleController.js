const Staff = require('../models/staffModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getWorkSchedule = catchAsync(async (req, res, next) => {
  const staff = await Staff.findById(req.params.staffId);

  if (!staff) {
    return next(new AppError('No staff found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      workschedule: staff.personalDetails.workschedule
    }
  });
});
