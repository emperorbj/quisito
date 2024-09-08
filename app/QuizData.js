import { PiCodeThin } from "react-icons/pi";

export const quizData = [
    {
        id:1,
        icon: PiCodeThin,
        quizTitle: 'React Quiz',
        quizQuestions: [
            {
                id:1,
                mainQuestion: 'which programming language is React built on?',
                choices: [
                    'A. python',
                    'B. laravel',
                    'C. javascript',
                    'D. postgres'
                ],
                correctAnswer: 2,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
            {
                id:2,
                mainQuestion: 'which company built React?',
                choices: [
                    'A. google',
                    'B. microsoft',
                    'C. oracle',
                    'D. meta'
                ],
                correctAnswer: 3,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
            {
                id:3,
                mainQuestion: 'which company owns Github?',
                choices: [
                    'A. google',
                    'B. microsoft',
                    'C. oracle',
                    'D. meta'
                ],
                correctAnswer: 1,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
        ]
    },
    {
        id:1,
        icon: PiCodeThin,
        quizTitle: 'Next JS Quiz',
        quizQuestions: [
            {
                id:1,
                mainQuestion: 'which programming language is Next js built on?',
                choices: [
                    'A. python',
                    'B. laravel',
                    'C. javascript',
                    'D. postgres'
                ],
                correctAnswer: 2,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
            {
                id:2,
                mainQuestion: 'which company built Next js?',
                choices: [
                    'A. google',
                    'B. microsoft',
                    'C. oracle',
                    'D. Vercel'
                ],
                correctAnswer: 3,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
            {
                id:3,
                mainQuestion: 'which company owns Github?',
                choices: [
                    'A. google',
                    'B. microsoft',
                    'C. oracle',
                    'D. meta'
                ],
                correctAnswer: 1,
                answeredResult: -1,
                statistics: {
                    totalAttempts: 3,
                    correctAttempts: 2,
                    incorrectAttempts: 1
                }
            },
        ]
    }
]