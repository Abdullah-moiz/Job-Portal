import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log(token);

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized Please login' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECREAT);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized Please login' });
  }
};

export default validateToken;