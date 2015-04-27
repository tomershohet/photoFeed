angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller("HomeCtrl", function($scope, $ionicSlideBoxDelegate, $timeout) {
    var lastScrollTop = 0;
    $timeout( function() {
        $ionicSlideBoxDelegate.enableSlide(false);
    } ,0);

    $scope.photosFeed = [{id: "1", name: "Tomer", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/10561763_10152659558942682_4962942110060764144_n.jpg?oh=b0589e21488ad3ed57fab186c0fa23b0&oe=55AAD54E&__gda__=1437103065_04d2f22df31633e7f6e3105145f7d50b", shootTime: "3 hours ago",
                         subPhotos: [{updated: "1 hours ago", editedBy:"Yael", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/c0.0.160.160/p160x160/1604624_605572142832110_73102778_n.jpg?oh=19cfcc49b76ccbaa57d6f1ecb6eb063a&oe=55A1A0AA&__gda__=1440572028_3c8b6ac315d755986291e28902ea618f", picUrl: "http://pe-images.s3.amazonaws.com/photo-effects/photoshop-sunset/sunset-beach.jpg", title: "סוף מתוק עדיף מהתחלה מתוקה", tags: ["Akko", "Food"], likes: ["Yael", "Sam"], likesCounter: 2},
                                     {updated: "2 hours ago", editedBy:"Nider", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c31.0.160.160/p160x160/1560485_10152246049919131_780380739_n.jpg?oh=de8d763c09eeaad795ffbe075fdc02ee&oe=55E111EC&__gda__=1441120062_5031584fd022bb066669698c68e2891a", picUrl: "http://pe-images.s3.amazonaws.com/photo-effects/photoshop-sunset/golden-sunset.jpg", title: "לילה טוב", tags: ["Akko", "Food"], likes: ["Arial", "Lee", "Sam"], likesCounter: 2}]},
                         {id: "2", name: "Yael", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/c0.0.160.160/p160x160/1604624_605572142832110_73102778_n.jpg?oh=19cfcc49b76ccbaa57d6f1ecb6eb063a&oe=55A1A0AA&__gda__=1440572028_3c8b6ac315d755986291e28902ea618f", shootTime: "3 hours ago",
                         subPhotos: [{updated: "3 hours ago", editedBy:"Tomer", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/10561763_10152659558942682_4962942110060764144_n.jpg?oh=b0589e21488ad3ed57fab186c0fa23b0&oe=55AAD54E&__gda__=1437103065_04d2f22df31633e7f6e3105145f7d50b", picUrl: "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/11001856_796166507106005_1187136055861943696_n.jpg?oh=f43de8abcd267c678e7167aa006e668b&oe=55D970D9&__gda__=1440372147_629edc7f7c26266fa3902725679c507c", title: "Fun in the snow :-)", tags: ["Snow"], liked: true, likes: ["Tomer", "Adi", "Neta"], likesCounter: 3}]},
                         {id: "3", name: "Sam", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10628060_10152267607690598_6249357838713744687_n.jpg?oh=db95f68ff96fc3036cda03784558d347&oe=5599A884&__gda__=1436267797_19165958430fb8ed6ad291a1d2e8bcaf", shootTime: "10 hours ago",
                         subPhotos: [{updated: "9 hours ago", editedBy:"Ori", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c62.0.160.160/p160x160/10639646_10202080847621590_5989129072159953414_n.jpg?oh=17b8baa64afc83b7bb397aa044efc305&oe=55D1A127&__gda__=1437040950_e09cd5053f22ed496248e23e7094f996", picUrl: "https://scontent-fra.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10710877_10152415279760598_6875200790965061399_n.jpg?oh=e74450c83111e1c494f4fd76e6c77925&oe=55DF07CA", title: "Just made my first brade", tags: [], likes: ["Asi"], likesCounter: 1}]},
                         {id: "4", name: "Ariel", profilePic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/p160x160/10671430_10203844532726980_2736261165339723692_n.jpg?oh=2f78931a5adb73b09561a371f31f2b45&oe=55ABAD2F&__gda__=1436327504_bb29649f42a75b78ae1679df603f4763", shootTime: "12 hours ago",
                         subPhotos: [{updated: "8 hours ago", editedBy:"Mosden", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c1.0.160.160/p160x160/1544424_10203434115747213_8615171785042763955_n.jpg?oh=b8e842dd8e116496607acd98e7664cfc&oe=559ED289&__gda__=1436745289_d4053f88227118a47cd83aea841308bd", picUrl: "http://pe-images.s3.amazonaws.com/photo-effects/cc/vignette-radial-filter/original.jpg", title: "Meet Lola", tags: [], liked: true, likes: ["Lee", "Tomer"], likesCounter: 2},
                                     {updated: "11 hours ago", editedBy:"Yael", profilePic:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/c0.0.160.160/p160x160/1604624_605572142832110_73102778_n.jpg?oh=19cfcc49b76ccbaa57d6f1ecb6eb063a&oe=55A1A0AA&__gda__=1440572028_3c8b6ac315d755986291e28902ea618f", picUrl: "http://pe-images.s3.amazonaws.com/photo-effects/cc/vignette-radial-filter/radial-filter-vignette-effect.jpg", title: "תגידו מזל טוב", tags: [], liked: true, likes: ["Lee", "Tomer"], likesCounter: 2}]}];
    
    $scope.like2 = function(subPhoto) {
        subPhoto.liked = !subPhoto.liked;
        if (subPhoto.liked)
          subPhoto.likes.unshift("Tomer");
        else
        {
          var index = subPhoto.likes.indexOf("Tomer");
          if (index !== -1)
              subPhoto.likes.splice(index, 1);
        }
    };

    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
        $ionicSlideBoxDelegate.enableSlide(true);
    };

    $scope.updateSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 200);
        $ionicSlideBoxDelegate.enableSlide(true);
    };

    $scope.edit = function(photo) {
      //  launchEditor(photo.id, photo.picUrl);
    };

    $scope.onScrollY = function(scrollTop, scrollLeft) {
      if (Math.abs(scrollTop - lastScrollTop) > 50)
        $ionicSlideBoxDelegate.enableSlide(false);
      lastScrollTop = scrollTop;
    };
      
})

.controller('SearchCtrl', function($scope) {})

.controller('GalleryCtrl', function($scope) {})

.controller('CameraCtrl', function($scope, Camera) {


  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
  };
})

.controller('SearchCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('SearchDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

