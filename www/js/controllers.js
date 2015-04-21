angular.module('starter.controllers', [])

.controller("HomeCtrl", function($scope) {
    $scope.photosFeed = [{id: "1", name: "Tomer", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/10561763_10152659558942682_4962942110060764144_n.jpg?oh=b0589e21488ad3ed57fab186c0fa23b0&oe=55AAD54E&__gda__=1437103065_04d2f22df31633e7f6e3105145f7d50b", 
                         subPhotos: [{updated: "2 hours ago", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/p240x240/10981652_10205570520038858_2693678169926452859_n.jpg?oh=d9699dcc3d14453e28cf8a0395fff6ea&oe=55E58AEB", title: "Now - Let us eat!", tags: ["Akko", "Food"], likes: ["Yael", "Sam"], likesCounter: 2},
                         {updated: "2 hours ago", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1017301_10152215429677682_908426977_n.jpg?oh=54444f51a80f6bd3478799a48c8aa29b&oe=55DBF690", title: "Now - Let us eat!", tags: ["Akko", "Food"], likes: ["Yael", "Sam"], likesCounter: 2}]},
                         {id: "2", name: "Yael", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/c0.0.160.160/p160x160/1604624_605572142832110_73102778_n.jpg?oh=19cfcc49b76ccbaa57d6f1ecb6eb063a&oe=55A1A0AA&__gda__=1440572028_3c8b6ac315d755986291e28902ea618f", 
                         subPhotos: [{updated: "3 hours ago", picUrl: "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/11001856_796166507106005_1187136055861943696_n.jpg?oh=f43de8abcd267c678e7167aa006e668b&oe=55D970D9&__gda__=1440372147_629edc7f7c26266fa3902725679c507c", title: "Fun in the snow :-)", tags: ["Snow"], likes: ["Tomer", "Adi", "Neta"], likesCounter: 3}]},
                         {id: "3", name: "Sam", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10628060_10152267607690598_6249357838713744687_n.jpg?oh=db95f68ff96fc3036cda03784558d347&oe=5599A884&__gda__=1436267797_19165958430fb8ed6ad291a1d2e8bcaf", 
                         subPhotos: [{updated: "9 hours ago", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10710877_10152415279760598_6875200790965061399_n.jpg?oh=e74450c83111e1c494f4fd76e6c77925&oe=55DF07CA", title: "Just made my first brade", tags: [], likes: ["Asi"], likesCounter: 1}]},
                         {id: "4", name: "Ariel", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/p160x160/10671430_10203844532726980_2736261165339723692_n.jpg?oh=2f78931a5adb73b09561a371f31f2b45&oe=55ABAD2F&__gda__=1436327504_bb29649f42a75b78ae1679df603f4763", 
                         subPhotos: [{updated: "12 hours ago", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/p240x240/10981652_10205570520038858_2693678169926452859_n.jpg?oh=d9699dcc3d14453e28cf8a0395fff6ea&oe=55E58AEB", title: "Meet Lola", tags: [], likes: ["Lee", "Tomer"], likesCounter: 2},
                         {updated: "12 hours ago", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/p240x240/10981652_10205570520038858_2693678169926452859_n.jpg?oh=d9699dcc3d14453e28cf8a0395fff6ea&oe=55E58AEB", title: "Meet Lola", tags: [], likes: ["Lee", "Tomer"], likesCounter: 2}]}];

    $scope.like = function(photo) {
        photo.likes.push("Tomer");
    };

    $scope.edit = function(photo) {
      //  launchEditor(photo.id, photo.picUrl);
    };
})

.controller('SearchCtrl', function($scope) {})

.controller('GalleryCtrl', function($scope) {})

.controller('CameraCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
