const a=[-.28,.4,.55,-.13,.58,-.13,.07,-.21,.43,.07,.72,-.05,-.05,-.49,.86,-.06,.35,-.06,-.17,-.04,.09,.08,-.11,.84,.82,.65,.15,-.26,-.06,.31,.27,.08,.59,-.1,.34,.07,.81,.93,.11,.42,.13,.63,.13,0,-.07,.78,.27,.06,.39,-.13,.33,-.09,.3,.72,-.13,.74,.55,-.21,.05,.59,-.07,.49,.47,-.17,.31,.2,.61,.97,.1,-.05,-.04,.49,-.11,-.13,.65,.1,.08,-.13,.56,.22,-.24,.46,.05,.55,-.13,.1,.65,.16,-.55,.7,-.38,.04,.02,-.7,.27,-.23,-.48,.03,-.24,-.12,-.09,.59,.08,-.14,.09,.06,.05,.26,.66,.23,.09,-.06,-.09,-.47,-.03,.68,.15,.14,-.11,.71,-.08,.07,.2,-.17,-.25,.13,.57,-.25,.09,.81,-.41,-.34,-.05,-.23,.39,-.08,-.44,-.03,.24,-.08,.44,-.03,.31,.66,-.07,-.14,.02,-.39,.47,-.03,.57,.05,-.01,.13,-.3,-.42,-.01,.07,.02,.91,-.54,.2,0,-.1,.07,-.18,.29,.17,-.34,.63,-.05,.09,-.39,-.39,.18,.29,0,.37,-.25,.66,.16,.02,-.08,.59,.04,-.18,.18,.03,-.35,-.18,-.14,-.15,.11,.26,.35,.67,.16,.21,.14,-.02,.67,.45,.79,.17,-.32,0,-.24,-.25,-.18,-.18,-.32,.92,.04,.91,-.19,-.11,-.05,-.17,.29,.25,.17,-.01,.12,.68,.27,.79,-.37,.2,-.04,-.3,-.07,-.21,.78,.49,.16,-.01,.79,.64,-.21,.09,-.11,.94,-.32,-.6,.01,-.11,.18,.04,.09,-.07,-.3,-.15,-.14,-.06,.47,.03,-.02,.46,-.11,.55,.2,-.44,.37,.47,-.42,.05,.02,.52,.36,.53,.15,-.11,.77,.5,.63,-.09,.44,-.17,.51,.36,-.4,.31,.72,-.45,-.2,.45,.35,.85,-.29,.13,-.13,-.27,.51,-.04,-.16,.11,.57,-.11,.05,-.1,.03,.59,.15,-.01,-.01,.31,.03,.19,-.48,.64,.51,-.14,-.11,-.08,.06,-.13,-.2,-.4,.43,.03,.46,-.05,.87,.58,-.32,-.21,.53,-.27,-.03,-.18,-.38,.28,.05,.02,-.11,.04,.2,.07,.02,.04,.08,.13,-.25,.02,.85,.5,.07,-.34,.1,-.15,.35,-.63,.14,-.2,-.06,.77,.04,.05,.41,.58,.62,.07,-.29,.21,-.04,-.46,-.12,.78,-.22,.1,.35,-.27,.42,-.33,-.14,-.14,.19,.47,.09,-.34,.19,-.06,.1,.08,-.01,.1,.01,-.03,.51,.55,.48,-.1,.06,-.06,.03,.59,-.03,-.11,-.28,-.22,-.13,-.19,.46,.41,-.3,.11,.78,.39,.36,.34,.47,-.33,-.42,.51,-.21,.08,.45,.48,-.4,-.21,-.03,.76,.14,-.06,.31,.75,.65,0,-.23,-.59,-.32,-.34,.69,.05,-.46,.73,-.03,.5,.62,.25,.23,.55,.38,.24,0,.01,.61,.47,.18,-.12,.34,0,-.65,-.23,.03,-.3,.25,.76,-.3,.43,.51,.4,-.46,-.21,-.08,.18,-.37,-.03,-.32,.72,.29,.79,.37,.24,-.4,.61,.44,.24,.66,.28,.22,.9,.43,.16,-.02,-.18,-.06,-.56,.28,.39,.22,-.05,.05,-.55,.45,.73,-.33,.11,.49,-.52,-.24,-.27,.44,.47,.55,-.31,-.46,.56,.55,-.17,.43,-.18,.48,-.18,.03,.1,-.23,-.18,-.23,.52,-.06,.54,-.06,-.09,-.01,-.03,.12,.14,.07,.39,-.25,-.34,-.14,-.41,-.07,-.15,-.2,.17,-.64,.09,.15,-.35,-.08,.4,.06,-.25,-.25,.42,.46,-.27,.29,.79,.56,.51,.34,-.08,-.19,-.49,-.08,-.07,.53,.19,-.03,-.18,0,-.13,-.17,.07,-.26,0,.37,.5,.43,-.32,.5,.62,-.1,-.21,-.27,.08,.09,.2,.27,-.18,.08,.9,.63,.26,.12,.8,0,.11,.03,.38,-.2,-.63,.5,.54,.01,.01,.52,.69,.49,-.02,.31,.18,-.42,-.08,.17,-.32,.01,.81,-.2,-.14,-.27,.1,.6,-.11,.16,.03,-.35,-.28,-.23,-.02,-.39,-.05,.15,-.29,.33,-.15,-.01,.05,-.11,-.26,.2,.13,.61,-.43,-.26,.13,-.16,.55,-.07,-.23,.3,.48,-.66,.5,.07,.05,.04,-.55,-.35,.63,.61,.02,.87,.04,-.17,.13,.58,.13,.71,-.35,.3,.14,.13,-.24,.52,.6,.41,.02,-.09,.26,.01,-.67,.37,.69,-.38,-.01,.02,-.56,.26,.48,-.36,.04,-.33,.6,.61,-.23,-.12,-.32,-.55,-.16,-.21,-.06,.23,.13,.38,-.37,.5,-.04,.14,.46,-.03,.03,-.15,.27,-.05,.18,.65,-.4,-.07,.01,-.23,-.08,.12,-.07,.05,-.11,-.06,.35,.8,-.04,.57,.33,-.14,.03,-.09,.33,-.29,.02,.56,.07,.06,-.49,.85,-.15,-.14,-.16,.75,.33,-.04,.37,.05,-.24,.4,.85,-.16,-.01,0,.18,-.1,-.04,.7,.07,.02,.48,.4,.01,.05,.16,.65,.14,.48,.73,.46,-.26,.32,-.03,-.68,-.48,.55,-.01,-.38,-.17,-.04,-.05,.6,-.29,.52,.07,0,.47,.47,.18,-.09,-.16,.03,.18,0,-.36,.15,.92,.61,.16,.62,.38,-.37,-.13,.12,.14,-.17,.45,.68,.37,.34,-.2,-.29,-.02,-.05,-.34,.54,-.02,.34,-.35,-.45,.3,.1,.61,.16,.29,-.22,.58,.06,.77,.11,.04,-.01,-.01,-.29,.79,-.35,-.21,-.2,.1,.03,-.08,.15,.12,.04,.61,-.12,-.48,.18,.49,.34,.16,.1,.15,-.04,.2,.33,-.02,.1,-.09,-.34,-.36,-.01,.15,.3,.7,-.05,-.26,-.57,-.52,-.16,.03,-.24,-.33,-.38,.15,-.08,-.37,-.57,-.35,-.12,-.09,.09,-.04,.22,.53,.12,.55,.8,-.07,-.39,.34,.41,-.14,.56,-.6,-.35,-.1,.4,-.06,-.26,-.28,.26,.74,.15,.02,-.05,.11,-.07,.56,.19,-.44,.1,-.52,-.15,.36,.21,-.45,.31,-.01,-.13,-.38,-.51,.06,-.54,.04,-.33,.61,.43,.52,-.06,.64,.47,-.33,-.16,.52,.64,.58,.46,-.59,-.12,-.11,.31,.57,.21,-.03,-.24,.47,-.18,-.29,-.06,.66,.14,.25,-.21,.04,-.2,-.02,-.37,.33,.55,-.49,.55,-.05,.66,.15,-.12,-.05,.26,.06,-.1,-.1,-.41,-.07,.07,-.45,.86,-.45,.43,.25,-.11,-.36,-.26,.52,.61,-.45,.04,-.12,-.02,-.26,-.58,.12,.1,-.07,.07,-.3,-.32,-.2,.01,-.48,.08,.05,.01,.07,-.11,-.08,.02,-.13,.15,.47,.04,.08,-.17,.03,.3,.1,-.29,.35,-.32,-.26,.32,-.43,-.63,.11,.5,-.31,.31,-.11,.11,-.28,.49,-.02,.15,-.02,-.52,.03,.12,-.15,-.09,.17,.85,-.16,.37,.07,-.23,.64,.24,-.15,-.01,-.4,.08,-.22,-.13,.28,-.34,.39,.06,-.17,.36,.07,-.22,-.07,-.6,.66,.36,.05,0,.8,-.25,-.11,.17,.53,.54,-.13,-.21,-.11,-.05,.6,.01,.31,.79,-.35,.21,.71,.02,.04,.04,-.13,-.16,.28,.09,-.2,.08,.56,-.02,-.5,.47,.02,.42,.26,-.22,-.16,.57,.47,-.23,-.11,-.66,.49,.49,.38,.47,0,.37,-.07,-.08,-.22,-.13,-.09,.1,.04,-.23,.81,-.22,.64,-.12,.94,.02,.18,-.13,.04,.03,.81,-.39,-.02,-.52,.49,.65,-.17,.12,.54,.6,-.61,-.03,-.31,.65,.21,.06,.24,.45,-.1,.75,.42,.41,.12,.02,-.21,-.19,.32,.16,-.42,-.07,-.24,-.04,-.05,.67,.38,-.18,-.2,.6,.08,.57,.52,.38,.18,-.33,.18,-.43,-.2,.15,.16,.87,.11,.43,.1,-.5,-.07,.13,-.46,-.21,.08,.68,.87,.08,.51,-.24,-.16,-.39,.06,.57,.07,-.2,.44,.37,-.43,.07,.26,0,.57,-.19,.31,-.48,.47,.34,-.34,.52,.13,-.16,-.38,.6,-.38,.16,.49,.39,-.46,-.36,.52,.52,-.09,-.07,-.28,-.07,.32,-.31,-.4,.22,-.49,.45,.13,.54,.52,.51,.09,-.05,-.1,.86,.58,.56,-.14,-.06,-.07,.08,.11,.39,-.03,.53,-.1,-.27,-.32,.18,.21,.01,-.18,-.29,.31,-.42,.53,.17,-.3,.19,-.05,.13,.16,-.04,.08,.71,-.03,.47,.52,.03,-.25,.15,-.21,-.3,-.17,.17,-.18,.63,-.28,.33,-.04,.59,.25,.09,.13,-.3,.61,.51,.14,-.55,-.25,-.02,.33,.38,.17,.66,.27,.21,.08,.13,.88,-.17,-.64,.78,.15,-.02,.57,-.61,-.1,-.22,-.27,-.11,.57,.78,-.03,-.08,-.26,-.22,-.34,-.36,-.42,.51,.52,.25,.24,.09,.53,-.66,.19,-.31,.11,-.48,.07,.01,.38,.3,-.25,.03,.73,.25,-.1,.25,.07,.03,-.23,-.12,-.13,.26,.43,-.13,-.02,-.21,-.16,-.47,-.28,.27,.37,-.14,-.1,-.46,-.12,.34,-.24,-.03,-.09,-.24,.08,-.01,.6,-.19,-.02,-.28,-.51,.06,-.3,.18,-.21,-.22,-.06,-.22,.33,.23,.1,.03,.43,-.25,.25,-.23,-.11,.82,.43,-.49,.22,.55,-.22,-.47,-.19,.29,.52,.39,.95,.05,-.13,-.08,-.28,.4,.49,.05,-.29,-.3,.91,-.13,.06,.02,-.06,.56,.02,.05,-.15,.24,.18,.49,.02,.1,.85,.03,-.17,.56,-.22,.61,.66,-.1,-.1,-.09,-.06,-.16,.8,-.38,.57,.01,-.34,-.01,-.15,.02,.33,-.27,-.25,.19,.71,.71,.58,.4,-.37,.12,.03,-.07,-.37,.31,.1,-.08,.42,.05,-.15,.35,.28,-.39,-.03,-.37,.17,.36,-.1,.23,.26,.01,-.19,-.32,.37,-.12,.16,-.36,.47,-.16,.05,-.04,-.1,-.52,.51,-.07,-.17,-.25,.08,.07,0,.02,.56,-.06,-.1,.65,-.33,-.35,.06,.71,0,-.32,.61,.73,.26,.29,-.06,-.19,.12,.55,-.24,.21,.75,-.4,-.29,.03,.17,.16,.09,.51,-.04,.14,.14,-.58,.44,-.16,.34,.33,.05,-.32,.47,.03,.57,.51,-.4,.45,.33,.41,.38,-.51,-.2,.36,.15,.38,.13,.4,.41,-.01,-.3,.46,.44,.39,.32,.23,-.03,.38,.34,-.04,-.3,.42,.06,.97,-.04,.46,.46,.58,.44,-.05,.47,-.33,.07,.1,1,-.45,0,.47,.28,.3,-.05,-.05,.46,.48,.73,.56,.16,.19,-.21,.32,-.35,.63,-.26,.21,.84,.1,.18,.13,.01,.71,.54,-.01,-.09,.64,.12,.06,.49,-.25,.18,.45,.13,-.19,.31,-.03,.45,.16,.57,-.1,.03,.22,-.28,-.08,.15,.12,.15,.6,.16,.41,.09,-.06,-.14,-.25,.43,.54,.33,.53,.56,-.54,.29,-.13,-.14,.33,-.04,-.16,.41,.26,.49,-.4,.41,-.55,.01,.03,-.18,.18,-.47,.11,.6,.55,.42,.48,-.16,.53,-.04,.21,.07,-.57,.13,.36,-.41,.38,-.03,.33,.07,.53,.31,.08,.54,-.1,.01,.59,-.1,.03,.69,-.09,-.21,.05,-.14,-.13,0,0,.5,.65,.94,-.62,.41,.85,.85,.65,.5,.65,.05,-.17,-.41,.51,.01,-.19,.06,-.04,0,-.15,.63,.5,.45,-.01,.84,.17,.12,.31,.3,.4,.55,.36,-.2,.13,.08,-.13,-.13,-.17,.52,.26,.39,-.33,.16,-.09,.5,-.03,-.09,-.26,-.05,.47,-.06,.55,.26,.56,.52,.04,.23,.54,.57,.24,.16,.05,.49,-.39,-.21,-.15,-.34,.04,-.57,-.04,.04,-.13,.18,.22,.24,-.24,.73,.64,-.2,.47,-.2,.14,-.06,.13,.5,.6,.61,.29,.57,.39,.11,.26,.04,.19,-.1,.65,.63,.48,.11,.02,.01,.16,.24,.51,.49,-.42,.3,.3,-.19,.72,.05,-.02,-.01,.43,.73,.45,.47,.71,.75,.37,.07,.23,.04,-.12,.54,-.45,-.15,-.39,.5,.79,.32,.02,-.34,.17,-.13,.52,.1,-.11,.07,-.2,-.08,-.09,.82,-.59,.12,-.14,.49,-.18,.55,-.04,-.43,.25,.01,-.08,-.15,.75,.04,-.46,.41,-.33,-.04,.44,-.21,-.56,.05,.15,.62,-.2,-.47,.31,-.02,.38,-.09,.71,-.22,.55,.02,.79,-.13,-.15,-.25,.08,.53,.03,-.01,-.03,-.82,-.18,-.15,.36,.45,.42,.29,-.26,.24,.41,-.19,.01,.02,.01,-.06,.53,.54,-.17,.54,.53,.16,-.11,-.04,.46,.69,.3,-.45,.04,.02,.32,.07,-.06,.39,.53,-.11,0,.6,-.16,.28,.55,-.51,-.09,.32,-.28,.17,-.21,.59,-.14,.82,-.43,.02,-.25,-.04,.63,.03,-.12,.05,-.31,-.28,.8,.61,.43,.21,.52,.71,.64,.5,.54,-.17,-.18,.1,.59,-.46,.39,.02,-.12,.05,.71,.57,-.32,.77,.06,.39,.6,.28,-.02,-.01,-.13,-.12,-.08,.19,.03,.36,.56,.51,.59,.01,.16,.04,.3,.57,.12,.02,.2,.46,.82,-.06,.19,-.48,-.18,.61,.34,.49,-.2,.69,-.12,-.15,.52,-.48,.62,.41,.63,.21,.41,-.1,.39,.44,-.13,.33,.49,.66,.42,.78,.65,.83,.14,.78,.52,-.17,-.01,.81,.67,.68,.64,.65,-.33,.31,.76,-.04,-.44,.74,-.07,.62,-.34,.03,.31,.22,.69,.57,.08,.14,.32,-.44,.56,-.21,.34,.29,.35,-.45,.27,.02,.14,.02,.2,.35,.32,-.25,.58,-.04,.14,.21];export{a as rvalData};
