const a=[-.05,.21,-.07,-.14,.09,.03,.01,.34,.57,.06,.24,-.14,0,-.04,.28,.01,.08,.03,-.11,.16,.01,-.15,-.07,.3,.51,.39,-.24,-.45,.04,-.22,.16,-.23,.17,.14,-.12,.14,.13,.35,.09,.06,.22,.37,-.12,-.11,.09,.28,.17,-.06,.03,.31,.32,-.03,-.17,.2,-.09,.46,.38,.09,.1,.33,.1,.22,.23,.05,.13,-.39,.27,.32,.06,.04,-.04,.23,.14,-.33,.25,.05,.02,.12,-.01,-.3,-.09,.28,.18,.36,-.16,-.21,.44,.09,-.2,.27,-.24,-.03,.38,-.18,.02,.05,-.16,-.16,-.14,.17,.04,.23,.1,.05,.18,.05,.15,.25,.22,.14,.14,.19,.04,-.07,-.23,.24,-.12,-.23,-.07,.58,.17,-.08,.05,.09,.04,.37,.06,-.08,-.32,.24,.08,-.17,.13,.08,-.01,.17,-.06,.07,-.36,.08,.16,.16,.35,.46,.09,.02,.11,-.23,.26,.07,.21,.29,.11,.11,.27,-.21,.15,-.17,-.08,.39,-.17,.1,.06,.17,.45,.25,.06,-.35,-.02,.42,.06,-.34,0,.1,.13,-.3,.1,-.05,.23,.17,.13,.07,-.17,0,.09,.02,-.09,-.21,.03,-.12,-.16,.2,-.09,.36,.2,.02,-.03,.02,-.03,-.21,.56,.31,.26,-.03,-.08,-.22,.01,.11,-.01,.06,.19,.35,-.22,.37,.09,.2,.04,.25,-.22,.12,-.02,.18,0,.12,.2,.24,.11,-.33,-.07,.05,.13,-.13,.37,-.11,.05,.08,.22,.43,-.02,-.05,.2,.3,.18,-.03,.37,.2,-.03,.14,.01,-.03,.12,-.01,-.04,.1,.11,.14,-.16,.49,.01,-.01,.01,-.26,.34,.14,-.24,.18,-.16,.33,.22,.69,-.21,.05,.2,-.03,.19,.12,-.14,.25,.12,.04,.02,.05,.45,-.09,-.04,.17,.01,.29,.05,-.21,.09,.1,.15,.24,.19,-.15,.33,-.12,.03,-.11,0,.02,-.21,.21,-.02,.39,-.13,.14,-.16,.41,.4,-.05,-.09,.1,-.28,-.12,-.05,-.15,-.08,.04,.36,-.21,.3,.22,0,.05,.09,-.12,.08,.05,-.04,.18,.09,.02,-.36,-.03,-.25,.04,.24,-.11,.28,-.18,-.05,.1,.18,-.09,.02,-.09,-.11,.14,.22,.04,.06,.02,.22,.39,.04,-.28,.02,.03,.81,.06,-.09,.23,-.11,.05,0,.2,-.16,0,-.05,-.03,.65,.07,-.03,.16,.32,.3,.03,-.14,.09,-.1,-.06,.14,-.17,.07,-.27,-.18,.02,.08,.01,.11,0,.06,.14,.02,-.09,.05,-.1,.1,-.17,0,-.05,.6,.04,-.16,.25,-.03,.17,-.02,-.08,-.03,-.19,.05,-.26,-.08,.2,0,.03,.13,.06,.21,-.09,.08,.66,.24,.05,-.1,.12,-.09,.2,.02,.6,-.09,-.11,.25,.16,.11,.13,.13,.03,.48,.39,.63,.18,-.01,.02,.1,.8,-.16,.21,.22,-.26,-.06,.17,-.17,-.16,.16,.04,.5,.09,.01,-.11,.23,-.2,-.09,-.12,0,-.3,.16,.24,.17,-.03,.1,-.11,.21,.06,.46,-.04,-.02,.06,.31,-.02,.5,.18,-.05,-.01,-.12,.05,-.17,.06,-.16,.37,-.22,-.05,.32,.02,.15,.22,-.12,-.03,.01,.07,.37,.4,-.09,-.36,.08,-.02,-.05,.15,.08,.34,.02,.12,-.11,-.09,.11,.26,.3,-.27,-.07,-.3,.02,-.09,.02,-.05,-.01,.24,.07,.08,.06,.11,.01,.01,.04,-.11,-.17,-.18,-.07,.03,-.19,-.02,-.16,-.22,-.11,-.17,-.2,.12,.12,-.07,.24,.03,-.1,.53,-.12,-.13,.03,-.12,-.04,0,-.15,.43,.37,.18,.13,.04,-.15,-.06,-.02,-.06,-.06,.49,.12,.19,.02,-.05,-.29,.07,.04,-.21,-.01,.21,-.04,.15,.3,.05,.17,-.07,.11,.25,-.02,-.02,.05,.3,-.29,.19,.09,.11,-.08,.19,.31,-.02,.18,.08,-.22,-.14,-.12,-.08,.15,-.02,.15,-.17,.18,-.03,.12,.02,.2,-.01,-.06,.02,.1,-.03,-.06,-.08,-.29,.41,-.19,.1,.2,.07,.14,-.09,.18,-.14,.19,.17,.02,.04,-.23,-.15,.27,-.17,-.46,.08,.17,-.2,.27,-.06,.14,-.05,-.29,-.01,.06,.2,.01,.33,-.05,.11,.27,.02,-.15,.22,-.26,-.03,-.06,.05,-.08,.59,.44,.61,-.17,-.01,-.22,.02,-.26,.28,.27,-.19,.11,.11,-.21,.03,.25,.02,-.03,-.1,.42,.26,.2,.05,-.14,-.25,.02,.04,.3,-.08,.08,.12,-.19,.3,.38,.48,.13,-.1,.06,.02,-.19,.01,-.18,.3,.09,.04,.06,-.09,.03,.61,-.24,.13,.05,.33,-.03,.11,-.14,.32,-.19,-.18,-.23,-.18,-.05,-.12,-.01,.06,-.16,.2,-.07,.21,-.04,-.51,-.03,.26,-.2,-.2,-.17,.24,0,.61,.12,.22,.3,-.16,-.19,-.16,.24,.15,.01,-.06,.02,-.03,-.09,-.25,-.37,.21,.09,.03,.21,.13,-.07,.26,.31,-.31,-.26,.12,.09,-.1,-.03,.07,.38,.11,-.12,0,-.16,-.11,.24,-.14,0,.05,.12,-.37,-.05,-.2,-.02,-.09,.31,.23,-.31,-.04,.45,.06,-.14,.53,.15,-.04,.13,.11,.32,.31,-.28,-.17,-.04,-.14,-.33,.08,-.21,.28,.08,-.04,0,0,.18,-.08,.68,.34,.24,.18,.16,-.1,-.17,-.02,-.01,-.15,.26,-.15,-.22,-.15,-.02,.11,-.05,-.01,-.27,-.29,.31,.15,.07,-.13,.05,.27,-.09,.34,.05,.16,-.28,.58,.02,-.16,-.07,-.24,-.15,.32,-.29,.33,.24,-.01,-.1,-.17,-.25,-.19,-.04,.25,.2,.16,0,.1,-.12,-.16,-.21,.02,.1,.06,.1,-.23,.07,.05,.27,.21,.15,-.13,.37,.01,.27,.23,-.1,-.09,.12,.07,-.13,-.18,-.03,-.03,.36,-.02,.03,-.21,.19,.06,.32,.4,-.08,.08,.11,.09,-.17,-.23,.04,.11,.07,-.11,-.05,.05,.08,-.11,-.04,-.05,.34,.03,.08,-.02,.11,.18,-.2,.16,-.19,.09,.37,.35,-.1,.26,-.07,.17,.24,-.1,-.27,-.11,.41,-.05,-.45,.42,.06,-.11,.21,.24,.15,-.05,-.17,.06,.48,.26,-.33,.36,-.17,.25,.14,.28,-.12,.08,.1,0,-.11,-.06,-.04,-.07,-.24,.22,-.05,.29,.33,.01,-.19,.23,.02,.21,.1,-.25,.3,.07,.19,-.13,-.03,-.04,.06,.3,.05,.03,.17,.22,.07,.12,.06,.1,-.07,-.1,0,-.22,-.12,-.02,.06,-.08,-.03,-.21,-.16,.16,.33,.1,-.01,.08,-.06,.29,-.04,-.22,-.07,.42,-.43,.19,-.03,-.01,-.01,.12,.09,.01,-.05,-.06,.09,-.17,-.01,-.04,.24,.3,.37,.09,.12,-.05,.07,.04,.06,-.03,-.13,-.03,-.03,-.17,-.01,.02,.17,-.04,-.15,.38,.12,-.23,.05,-.23,.25,.03,-.08,.12,.43,.28,-.01,-.37,.47,-.07,.08,-.01,.31,.08,-.02,-.07,.09,.04,-.09,.13,.3,.11,-.22,.04,-.02,.19,.06,.23,.04,-.12,.5,.09,-.2,.09,-.24,-.13,.24,.35,0,.16,.09,.25,.03,.03,.89,.06,.59,0,-.07,-.06,-.1,-.07,.07,.2,-.06,-.09,-.09,-.03,.45,0,.22,-.09,.29,-.13,-.07,-.06,-.05,.03,.18,-.2,.04,-.04,.01,.11,.09,.08,.1,.27,-.02,.12,.01,.28,-.19,.17,.3,.17,.08,.31,-.24,-.07,.26,.11,-.08,.15,-.09,.1,-.16,.09,.02,-.03,.11,.52,.42,-.04,.2,.17,.06,.14,.26,.03,.28,-.11,-.2,-.28,-.02,.25,-.02,.2,.07,.56,.33,-.04,-.09,.05,-.23,-.12,.12,.12,.21,.17,-.09,.07,.06,-.04,.01,.11,.03,-.11,.09,.02,-.34,-.22,.19,-.05,.07,-.05,.1,-.15,-.1,.06,.13,-.06,-.07,.05,.07,.2,-.18,.59,.3,.17,-.31,-.23,.45,.08,.1,.1,-.16,.09,0,-.1,-.23,-.3,-.16,.08,-.1,.08,.28,.5,.07,-.17,.1,.21,.25,0,-.08,.1,.06,-.08,.1,.13,0,.2,-.07,.02,-.2,.07,.77,.17,-.06,.22,-.02,-.21,.04,.81,.08,-.11,.04,-.22,-.37,.25,-.05,.13,-.05,.14,.21,-.18,.12,-.1,-.23,.27,-.1,.23,-.06,.31,.37,.55,.11,.01,-.01,.12,.06,-.18,.45,.28,.15,-.36,.19,-.1,-.07,.49,.13,.25,.38,.73,.15,.09,.15,.23,-.03,.25,-.09,-.03,.03,-.11,.15,0,-.46,.07,.21,.17,.16,.12,.04,.06,-.23,-.12,-.12,.04,.25,-.08,-.03,.03,.02,-.23,.33,.11,.18,.01,.07,.09,.14,.34,.09,.62,.26,.01,.1,.06,.16,-.06,-.12,.17,-.05,-.02,.21,.09,-.1,.03,.1,-.39,-.05,-.08,.13,0,-.17,-.21,-.16,.13,.05,-.2,-.19,-.33,-.07,.02,.22,.07,-.24,-.13,-.26,.04,-.06,.21,-.09,-.14,-.2,-.14,-.02,.09,.15,.09,.14,-.28,-.08,.04,.12,.23,-.09,.01,.5,.07,-.01,-.05,-.14,-.15,-.06,.17,.3,.41,.16,.05,-.15,.01,.07,.11,-.04,-.02,.27,-.04,-.1,-.28,-.09,.14,-.01,.03,.18,.17,.17,-.02,.24,.03,.42,.06,.01,.26,-.04,.5,.44,-.02,-.12,.03,-.14,.01,.1,-.01,.41,.04,-.08,.08,-.09,.14,-.22,-.08,.04,-.03,.59,.37,.38,.02,.11,-.18,.1,-.19,.08,.09,-.11,-.01,.12,.04,.02,-.06,-.19,.07,.02,-.12,-.11,.13,-.3,.13,-.08,.08,-.06,-.05,-.07,.05,.08,-.2,.16,.08,-.14,-.03,.13,-.1,.11,.24,.14,-.05,.23,.06,.06,0,.22,.11,.06,.26,-.04,-.23,-.01,.28,.21,-.06,.49,.45,.5,.3,.19,0,.08,.43,-.06,.04,.24,-.11,-.11,.21,.12,.14,.04,.24,.18,.04,-.14,-.16,.29,.15,.32,.09,.15,-.09,.01,.19,.01,.09,.13,-.02,.14,.03,.45,-.03,.29,.36,-.25,.36,.43,.25,.09,.08,-.1,.27,-.04,.04,.41,-.06,-.37,.02,.8,-.02,.15,.35,.21,.32,-.18,.08,-.02,.54,.26,.09,.08,.14,-.2,.13,.32,.01,-.04,.04,.09,.16,.31,.08,.42,-.06,.34,.25,-.06,-.22,.11,1,.2,.02,.18,.25,.44,-.04,.14,.01,.08,.1,0,.18,-.08,-.07,.49,.29,-.11,-.03,.84,.56,.02,.08,.24,.02,.2,-.01,.24,.17,.01,.8,.05,-.26,.11,.25,.42,-.01,.07,.09,.06,.17,-.25,.07,.08,.32,.14,.32,.37,-.15,.74,.21,.07,.03,0,.02,.31,.13,.44,-.32,.08,-.18,-.11,.05,.17,.08,-.01,-.02,.16,-.01,.02,.03,.12,.03,.02,.17,.18,-.28,.27,.54,0,.27,.15,.11,.16,-.11,.15,-.21,.32,.04,.41,.1,.17,.09,.31,-.01,.33,.01,.17,-.1,-.11,.12,.24,.02,.33,-.22,.19,.23,.41,.35,.37,.17,-.23,.03,-.13,.38,-.25,0,.08,.17,.14,.16,.04,-.09,-.09,.09,.42,.01,-.04,.59,-.11,.14,.25,.34,-.05,-.13,.15,-.11,-.13,.04,-.14,.12,.04,.1,.39,.13,.08,.08,.08,-.03,.02,.04,-.26,-.04,.32,.06,.02,-.03,.19,.13,.23,-.17,0,.26,.4,-.16,-.03,.41,.1,.01,-.16,.04,.08,-.01,-.09,.11,.08,-.08,.36,.01,.45,-.09,.18,-.24,-.07,.33,.11,.02,.23,.02,.32,.11,-.03,.12,.14,.24,.26,.31,.06,.24,.37,.05,.26,-.18,.2,.23,-.02,-.16,-.26,.24,-.13,.45,-.08,.02,-.25,.47,.09,.33,-.09,.1,.19,-.01,.11,-.06,.05,-.2,.08,-.33,.08,.08,0,.22,.14,.02,-.11,-.18,-.04,-.03,-.04,-.13,-.1,.06,.11,.08,.2,-.05,.17,-.08,.08,-.02,.31,-.11,-.02,.3,-.09,.01,.02,.2,.16,-.29,.17,-.1,.09,.41,-.07,-.08,-.22,.07,.37,-.11,0,.18,.08,-.16,-.13,.36,-.04,.32,-.21,.23,-.03,.13,.08,-.01,.11,.05,-.17,0,-.26,.05,-.02,.1,.15,.05,-.24,-.15,-.05,.38,.04,.18,.11,.17,-.16,.35,.01,.02,.12,.23,.27,-.03,-.24,.14,.42,-.14,.07,.11,.17,.1,.09,-.07,.3,.4,.05,-.08,.06,.08,.07,.39,-.19,-.09,.28,-.16,-.01,-.17,.22,-.22,.18,-.19,-.06,-.03,.04,.03,.09,.07,-.16,-.13,-.14,.15,.13,-.13,-.18,-.13,-.02,.23,.36,.13,.04,.11,.14,.35,-.26,-.09,0,.09,.01,.35,.31,.08,.47,-.06,-.19,.08,.12,.33,-.04,-.05,-.2,-.19,.09,.04,.06,.06,.48,.03,.22,.02,.27,-.12,.02,-.07,.15,-.29,.43,.34,.09,.08,-.29,.07,-.09,.15,-.04,-.15,.33,-.08,-.08,.31,-.31,.39,.03,.13,-.17,.22,-.3,.06,.28,.31,.42,-.19,.45,.09,.2,.36,.14,-.16,.2,-.04,-.02,0,.34,.39,.41,.24,.34,.05,.11,-.02,-.12,-.13,.3,.07,-.02,-.1,-.01,.11,.05,.33,.21,-.13,.09,-.23,.04,.07,.03,-.06,.12,.23,-.18,-.22,.06,-.24,-.15,.06,.54,.07,-.18,.17,.09,.16,.21];export{a as rvalData};
