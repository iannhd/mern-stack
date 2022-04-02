const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc    Get goals
// @route   GET /api/goals
// @acess   Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    
    res.status(200).json(goals)
})

// @desc    Get goals
// @route   POST /api/goals
// @acess   Private

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @acess   Private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }

    const user = await User.findById(req.user.id)

    // Check for User
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }
   
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({msg: `Update goal ${updateGoal}`})
})

// @desc    Delete goal
// @route   DELETE /api/goals
// @acess   Private

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    
    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }

     const user = await User.findById(req.user.id)

    // Check for User
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    await Goal.deleteOne(goal)
    res.status(200).json({ msg: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}