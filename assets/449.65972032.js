const a=[.26,.09,-.25,-.11,-.09,.26,.02,.5,.62,0,.17,-.1,-.05,.06,.19,.06,.11,0,-.18,.33,.07,-.03,-.09,.22,.42,.25,-.16,-.32,-.04,-.2,.02,-.12,.01,.14,-.13,.12,0,.29,-.01,-.08,.18,.16,-.14,.08,.02,.27,.07,.17,.05,.24,.35,.2,-.22,.06,-.06,.41,.39,.26,-.03,.1,.02,-.01,.07,.03,.08,-.31,.1,.21,.18,.05,-.01,.08,.11,-.34,.05,.06,.13,.05,-.08,-.18,.12,.1,.18,.21,-.15,-.2,.3,.07,0,.14,-.22,-.07,.49,0,.1,-.01,.02,.05,-.1,.17,.02,.09,.01,-.02,.07,-.01,.18,.24,.15,-.04,.27,.07,.03,.14,-.12,.1,-.19,-.17,.04,.49,.05,-.03,.15,.17,.13,.25,-.12,.11,-.33,.03,.22,.07,.11,.03,-.03,.33,-.03,-.04,-.29,.24,-.03,.31,.22,.34,.33,.15,.16,-.15,.13,.14,.06,.42,.07,.2,.45,-.18,.1,.07,-.02,.31,-.08,-.03,-.03,.05,.56,.15,-.18,-.26,.06,.27,.34,-.24,.11,.19,.05,-.19,.08,-.05,.21,-.01,.2,.04,-.27,-.23,-.04,-.04,.05,-.11,-.05,-.01,-.03,.28,-.2,.37,.04,-.19,-.17,.07,.1,-.17,.47,.24,.06,.1,.07,-.26,.05,.13,-.01,-.07,.3,.23,-.09,.18,.25,.05,.03,.34,-.18,.14,-.06,.04,-.17,-.01,.06,.03,.23,-.29,-.01,.1,.08,-.15,.24,-.31,-.15,.31,.11,.41,-.09,-.03,.06,.17,.34,.02,.46,.29,-.15,.22,.02,0,.1,.01,-.06,-.02,-.08,.07,-.23,.44,-.01,-.2,.04,-.29,.35,-.05,-.18,.06,-.11,.22,.23,.62,-.1,.23,.02,-.22,.07,-.01,-.19,.22,-.1,.07,.03,.04,.45,-.01,-.01,.07,-.09,.17,.11,-.15,.25,-.04,.02,.31,.31,-.17,.32,.02,.15,-.18,.02,-.19,-.18,.14,.01,.16,-.13,-.02,-.18,.32,.21,-.15,-.09,.33,-.25,-.17,.01,-.21,-.25,-.19,.19,-.12,.22,.05,.07,.06,.01,-.14,.13,.05,.13,.11,.01,-.16,-.23,0,-.22,-.05,.3,-.07,.25,-.27,-.08,.1,0,-.3,-.01,-.04,-.18,.13,.07,.19,.15,.04,.31,.4,-.06,-.26,-.18,-.19,.75,0,-.04,.21,-.06,.23,.2,.01,-.19,-.13,-.02,-.04,.69,.24,-.1,.17,.14,.2,.04,-.07,.13,-.09,-.07,.04,-.09,-.03,-.25,-.2,-.18,-.14,-.18,-.14,0,.08,.14,-.19,.01,.02,-.11,.08,-.23,.06,-.22,.63,-.03,-.25,.17,-.25,.03,-.14,-.25,.07,-.2,-.14,-.16,-.01,0,-.08,.05,.13,.26,.01,-.06,-.05,.64,.04,-.12,-.25,.07,0,.3,.2,.56,-.01,.02,.07,.29,-.04,-.05,.09,-.08,.32,.23,.86,.09,0,-.16,-.03,1,.08,.2,.14,-.04,-.12,.1,-.18,-.13,-.01,.19,.26,-.07,-.09,.15,.19,-.14,-.04,-.13,.02,-.15,.03,.24,0,.02,.24,-.08,.12,-.03,.51,-.23,0,-.01,.15,-.19,.59,.08,-.03,.02,-.04,-.06,-.3,0,-.09,.48,-.18,-.16,.12,.05,.08,.03,-.03,-.02,-.01,-.07,.3,.18,-.04,-.26,-.01,-.16,-.13,-.02,.13,.15,-.11,.03,-.17,.01,.26,.22,.22,-.29,-.23,-.25,-.07,-.22,.28,-.04,-.07,.3,.04,.19,.09,.09,.07,.26,.26,-.1,-.17,-.04,-.06,.07,-.25,-.17,-.15,-.14,-.02,-.02,-.19,-.05,.05,-.18,.03,-.15,-.26,.3,-.17,-.13,.05,-.01,.08,-.17,-.08,.37,.44,.22,.06,-.02,-.21,-.04,-.04,-.24,-.23,.52,.17,.01,-.15,-.1,-.18,-.04,-.02,-.12,.16,.07,0,.08,.16,-.15,-.04,-.05,-.01,.18,-.04,-.04,-.18,.39,-.04,.08,-.12,.18,-.01,-.04,.13,-.2,.22,-.06,-.23,-.13,-.01,.02,.08,-.06,.07,-.21,.28,-.14,.25,-.21,.3,-.09,.1,.05,.11,-.06,-.06,-.07,-.12,.35,-.26,-.03,.3,0,.28,-.06,.07,-.15,.16,.1,.08,.21,-.24,-.06,.1,-.05,-.3,.08,.02,-.05,.14,-.19,.07,.13,-.03,.12,-.12,.12,.07,.24,.04,-.04,.19,-.18,-.22,.01,-.2,-.12,.01,.05,-.08,.49,.28,.6,-.1,-.03,-.18,-.03,-.21,.09,.06,-.06,.08,.19,-.09,-.16,.19,.16,.1,.15,.23,.15,.4,.15,-.08,-.21,-.15,.22,.5,0,.15,-.03,.05,.16,.52,.57,-.17,-.15,-.07,-.01,-.11,.22,-.1,.12,.06,.02,.12,-.18,.05,.67,-.3,.1,.02,.51,-.1,.01,-.12,.09,-.35,-.1,-.18,.08,-.15,.13,-.03,-.15,-.24,.2,-.05,.03,-.01,-.38,-.12,.19,-.28,-.1,-.15,.23,.28,.63,-.03,.26,.22,.11,-.17,-.16,.36,.05,0,-.09,-.08,-.09,-.06,-.38,-.32,.14,.07,-.13,.07,-.02,-.23,.22,.46,-.22,-.2,-.1,.35,-.1,.23,.06,.55,-.09,-.16,-.21,-.16,-.03,.06,-.3,-.11,-.02,.07,-.26,-.15,-.05,.01,-.15,.21,.08,-.27,-.24,.28,.05,-.23,.59,.17,.01,-.06,.08,.24,.34,-.19,-.16,-.01,-.13,-.27,-.15,-.06,.09,.12,.04,-.04,-.12,-.01,.04,.87,.39,-.03,.12,-.04,.07,-.02,-.09,.16,-.2,.05,.02,-.19,-.19,.03,.2,-.08,.19,-.17,-.3,.11,-.05,.15,-.04,-.14,.27,-.01,.3,.1,.14,-.2,.61,.09,-.13,-.18,-.19,-.2,.48,-.08,.35,.06,-.06,-.04,-.1,-.16,-.06,.18,.33,.33,.2,.03,.07,-.11,-.09,-.19,-.04,.06,.05,.26,-.17,.03,0,.01,-.01,.19,-.05,.31,-.16,.37,.02,-.08,.02,.07,-.13,-.26,-.05,-.17,-.18,.18,-.01,.09,-.16,.13,.3,.22,.61,-.05,.17,.19,.27,-.14,-.26,.01,-.06,-.03,-.04,.07,.16,.09,-.01,.08,.07,.19,-.16,-.1,.22,-.1,0,-.22,.26,-.31,-.09,.15,.12,.08,.2,-.02,.14,.04,.03,-.27,-.16,.19,-.09,-.35,.57,-.1,-.12,.18,.37,.13,-.01,-.14,.21,.35,.04,-.27,.17,-.13,.17,.13,.39,-.08,-.04,.05,0,-.02,.05,.12,-.2,-.06,.16,.18,.2,.29,.11,-.14,.16,-.07,.03,.26,-.15,.44,.11,.28,-.05,.16,.17,.13,.1,.14,.13,.22,.14,.06,.04,.21,.06,-.14,.01,-.13,-.19,-.07,.04,.08,.14,-.09,-.22,-.03,.19,.34,.14,-.08,.2,-.03,.28,.22,-.12,.03,.23,-.37,.11,-.06,.05,-.02,-.06,.13,.22,-.15,-.07,.01,-.15,-.01,.08,.22,.12,.35,.08,.1,-.05,-.14,.01,-.03,.08,-.11,.02,.11,-.16,-.07,.06,.1,-.11,-.02,.18,.25,-.08,.17,-.17,.15,-.05,.16,.13,.29,.13,.11,-.29,.47,-.25,.01,.06,.38,.13,-.24,-.07,.13,-.11,.03,.08,.09,.27,-.16,-.01,.01,.18,-.06,.13,-.01,-.04,.38,.1,-.17,-.08,-.18,-.29,.11,.39,0,.01,-.07,.48,.04,.17,.79,-.18,.68,-.13,-.11,-.13,-.03,-.23,.05,.08,-.06,-.11,-.13,.06,.33,.1,.02,-.08,.13,.05,-.01,0,.1,.11,.07,-.2,.14,-.01,-.12,-.08,.01,.16,-.09,.16,.03,.34,.14,.12,-.11,.16,.08,.02,.33,.16,-.39,-.15,.27,.12,.11,.24,-.16,-.01,-.14,.33,.14,.1,.33,.5,.19,.19,.17,.04,-.15,-.03,.17,-.1,.16,-.09,-.07,-.12,-.03,.17,-.08,.02,.07,.4,.32,0,-.08,.05,-.1,0,.18,-.07,.02,.09,-.28,.05,.15,.13,-.11,-.08,.12,-.05,-.06,-.17,-.3,-.13,.27,.19,-.13,-.02,-.04,-.03,-.23,-.09,.24,-.25,.02,-.12,.13,.09,-.16,.85,.13,0,-.27,-.08,.25,.06,.35,.34,-.1,.11,-.02,-.13,-.23,-.24,-.03,-.08,-.12,-.1,.24,.35,.07,.08,.33,.03,.08,-.17,-.02,.35,.06,.08,.01,.06,.2,.08,.08,.23,-.15,.16,.95,.1,-.1,.41,-.11,.1,-.14,.99,.15,-.17,.1,-.24,-.32,.33,.18,-.02,.03,.05,.21,-.14,.23,-.18,.03,.3,-.07,.14,.15,.33,.5,.59,.31,-.2,-.02,.19,.2,-.18,.32,.04,.15,-.21,.12,-.1,-.19,.32,0,.14,.45,.87,.14,.07,.06,.17,.02,.04,.03,-.08,-.18,.07,.12,-.07,-.37,.1,.16,-.01,.28,.12,.06,-.04,-.09,-.08,-.2,-.17,0,-.19,-.04,.05,-.18,-.13,.16,.05,.16,.19,.2,-.02,0,.34,-.06,.77,.14,.11,.08,-.12,.07,.13,-.08,.09,.05,-.07,.22,-.12,0,-.03,.11,-.36,.07,-.06,.06,-.21,.03,-.01,.04,.06,.07,-.14,-.02,-.15,.11,.04,.14,-.01,-.08,.05,-.13,.03,.13,.12,.07,.03,-.14,.01,-.07,-.07,.09,.08,.04,-.06,-.09,.16,.05,.05,-.12,.09,.72,-.13,.03,-.04,-.2,-.23,-.24,.2,.21,.53,.06,.04,.03,-.21,-.14,.2,.06,-.04,.12,-.12,-.12,-.15,-.1,.2,.17,.05,.14,.25,.2,-.13,.25,-.01,.25,.13,.03,.08,-.11,.27,.33,.05,.14,.09,-.25,-.06,.03,.09,.23,.18,.11,.15,-.07,.23,-.14,.18,.13,-.07,.51,.17,.21,-.08,.23,-.14,.01,-.16,-.04,.15,-.05,.03,.04,-.09,-.01,-.21,-.12,.06,.18,.09,.01,.03,-.12,.03,-.1,.09,-.09,.05,-.06,-.09,0,-.01,.12,.06,.06,-.03,.09,.06,0,.23,.05,-.12,.13,.07,.13,0,.15,.2,.1,.08,.03,-.06,-.07,.11,.14,-.18,.55,.38,.35,.3,.06,-.09,-.13,.19,.03,-.09,.2,-.13,-.12,.08,.14,.06,-.17,-.03,.35,.02,-.13,-.1,.17,.13,.26,-.04,.14,-.1,-.14,.11,-.2,-.13,.09,-.22,-.06,-.18,.4,-.04,.37,.27,-.3,.18,.42,.08,-.11,.26,-.14,.13,-.11,-.14,.21,-.16,-.2,-.2,.59,.05,.22,.04,.08,.19,-.21,-.11,-.2,.52,.12,.34,0,.14,-.17,.04,.18,.03,-.05,-.15,-.03,-.01,.39,.04,.24,-.28,.14,.05,.06,-.06,.05,.8,.25,-.09,.17,.18,.34,-.03,.02,.03,.06,-.04,-.18,.18,.08,-.24,.58,.22,-.28,-.09,.79,.49,.07,.06,.06,.05,.01,.13,.08,.14,.05,.75,.04,-.28,.09,.19,.31,-.19,.01,.15,.08,.05,-.29,.06,-.13,.31,-.04,.29,.22,-.1,.92,.29,0,.09,-.05,.05,.19,-.09,.27,-.23,-.09,-.13,-.18,-.02,.26,.01,.04,-.08,-.06,-.22,-.19,-.17,.06,-.11,-.04,.03,.08,-.18,.19,.39,.13,.12,.04,-.04,.08,-.24,.05,-.14,.09,-.03,.52,.08,.08,.13,.22,-.03,.38,-.19,.2,.02,-.09,.18,.01,-.21,.23,-.09,.02,.16,.25,.27,.3,-.03,-.21,.1,-.01,.24,-.22,.07,.12,.06,0,.04,-.16,-.22,-.23,.26,.25,-.11,-.05,.56,0,-.05,.2,.35,.14,-.28,.15,-.15,.07,.04,-.29,-.02,-.04,.1,.28,.01,-.06,.35,.09,-.09,-.07,-.16,-.21,-.22,.14,-.1,-.23,-.01,.08,-.02,.08,-.12,-.09,.27,.36,.03,-.14,.56,.24,-.08,-.12,.02,.09,.03,-.01,.02,-.01,-.15,.18,-.17,.64,-.26,.31,-.17,.15,.3,-.09,-.16,.02,-.15,.33,.16,-.14,.14,.06,.1,.32,.13,-.15,.23,.24,-.01,.08,-.09,.09,.02,-.15,-.15,-.23,.25,-.03,.29,-.02,.03,-.05,.5,-.1,.13,-.26,-.09,-.01,-.2,.09,-.13,.01,-.15,-.1,-.27,.03,.2,-.06,.03,.06,.12,-.2,-.24,-.02,-.22,-.16,-.09,.01,0,.33,.32,.1,.02,.21,.16,-.05,-.09,.16,.11,0,.28,-.11,.12,.08,.03,.09,-.22,.24,-.2,.07,.21,.12,-.02,.03,-.07,.31,-.25,.04,.06,.07,-.15,.03,.16,.02,.23,-.19,.03,.05,.14,.05,.05,.11,.09,-.33,.08,-.14,-.04,.07,.03,.05,-.13,-.28,-.1,-.06,.21,.03,.1,.34,.22,.03,.22,-.21,-.21,.17,.02,.24,-.03,-.07,-.02,.18,-.05,.09,.08,.07,.08,.14,.03,.27,.27,0,-.02,-.14,.03,.09,.24,-.11,-.16,.23,-.2,.14,-.19,.08,-.01,.04,-.16,-.04,.14,-.01,-.1,.06,.33,.06,-.15,-.12,0,-.06,-.31,-.1,-.28,-.21,.03,.2,.01,-.11,.09,.07,.13,-.27,-.12,.04,.06,.18,.16,.2,.2,.38,.02,-.09,-.06,.14,.35,.09,-.04,-.13,.08,.13,-.1,-.09,-.12,.28,-.13,.1,.03,.16,-.19,.01,.07,.18,-.44,.34,.16,.24,.07,-.09,.06,-.18,.27,-.19,-.18,.17,.03,-.15,.28,-.07,.19,-.14,-.06,.01,.09,-.2,-.1,.05,.43,.24,-.36,.35,.05,.01,.15,.02,-.1,.01,-.09,-.12,-.05,.16,.18,.26,.02,.11,.08,-.04,-.12,-.14,-.11,.09,.32,-.21,.08,-.04,-.05,.04,.09,.05,-.09,.13,-.21,.1,-.08,.02,-.18,.15,.16,-.1,-.11,.15,-.18,-.2,.2,.48,.09,-.16,-.01,.34,.06,.11];export{a as rvalData};
