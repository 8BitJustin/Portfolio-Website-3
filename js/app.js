// const jolsondigital = {
//     name: 'Justin',
//     interests: ['PC Gaming', 'Coding', 'Hiking'],
//     expertise: () => {
//         workingSkills();
//         basicSkills();
//     },
//     work: ['Projects', 'GitHub', 'Resume'],
//     contact: 'j.olson.digital@gmail.com',
//     social: ['Facebook', 'LinkedIn', 'Instagram']
// };

const grow = () => {
    if (document.getElementById('certImg').style.transform === 'scale(1.7)') {
        document.getElementById('certImg').style.transform = 'scale(1)';
    } else {
        document.getElementById('certImg').style.transform = 'scale(1.7)';
    }
}

$('#coding-modal').on('hidden.bs.modal', function (e) {
    document.getElementById('certImg').style.transform = 'scale(1)';
})