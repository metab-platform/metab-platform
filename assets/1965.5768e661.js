const a=[-.33,.4,.83,-.05,.86,0,.13,-.24,.12,.32,.52,.08,-.1,-.73,.72,-.02,.32,.1,-.34,-.09,-.08,0,.06,.47,.49,.71,.05,.17,.32,.08,.28,-.09,.84,.19,.22,.17,.86,.52,.12,.71,-.02,.75,.67,-.01,.07,.38,.01,-.14,.12,-.04,.07,.1,.43,.7,.28,.39,.35,.07,.24,.63,.18,.75,.68,-.03,.18,.11,.73,.58,-.11,-.04,-.02,.58,.03,-.14,.76,.12,-.09,.15,.48,.12,-.55,.47,-.13,.62,-.1,-.06,.58,.03,-.68,.56,-.04,.03,-.05,-.63,.09,-.25,-.76,-.02,-.21,.18,-.05,.67,.32,-.14,.35,-.03,-.03,-.07,.72,.43,-.04,.07,-.13,-.65,-.03,.75,.09,.05,-.31,.41,-.16,-.1,.38,-.24,.19,.36,.63,-.28,.11,.84,-.33,-.49,-.18,-.12,.52,-.1,-.19,0,.08,.06,.72,.16,.5,.6,.11,-.11,.01,-.13,.48,-.19,.68,-.27,-.04,-.05,-.3,-.07,.01,.11,-.21,.62,-.08,.57,.03,-.03,-.01,.09,.41,.04,-.15,.62,.09,.11,-.25,-.43,.59,.1,-.09,.17,-.03,.77,-.02,.01,.09,.85,.32,-.23,.25,.29,.04,-.17,-.19,-.13,.02,.4,.57,.82,.53,.28,.08,-.1,.13,.32,.83,.02,-.52,.48,.07,.04,0,-.18,-.36,.58,-.03,.66,.08,.15,-.05,-.22,.13,-.17,.36,.23,.21,.76,.28,.84,-.3,.09,.2,.23,-.06,-.13,.42,.79,.22,.18,.58,.2,-.08,.06,.02,.63,-.42,-.37,-.09,-.44,.13,.08,.33,-.04,-.07,-.06,.25,.01,.78,-.07,.2,.2,.03,.86,.14,-.17,.18,.73,-.26,.31,-.11,.6,.08,.52,.08,-.39,.78,.79,.58,-.07,.29,.07,.69,.1,-.05,-.11,.36,-.56,-.01,.48,.04,.79,-.01,.05,-.27,.01,.72,-.34,-.12,.68,.23,-.16,0,.06,.01,.91,-.04,-.19,.13,.28,-.07,.33,-.18,.26,.61,-.11,-.27,.1,.28,.05,-.06,-.12,.78,.23,.58,-.07,.64,.67,-.19,-.06,.79,-.22,.11,-.01,-.57,.34,.12,.07,0,0,.15,.21,-.16,-.09,.18,.7,-.22,-.11,.81,.78,.12,-.04,.62,-.14,.63,-.43,.19,-.05,-.51,.37,.24,.05,.68,.84,.32,.16,-.07,-.13,-.11,-.65,.18,.86,.19,.04,.39,-.2,.05,-.22,.19,.05,.25,.66,-.04,-.02,.13,.07,.08,.15,-.04,.33,-.04,.01,.7,.78,.74,-.17,.14,-.01,-.03,.93,-.23,-.16,-.2,.23,-.08,-.13,.74,.27,.05,.05,.58,.71,.48,.4,.72,-.58,-.39,.7,.02,.05,.71,.85,-.03,-.48,.16,.71,.16,-.1,.16,.88,.87,.09,.04,-.43,-.47,-.27,.37,.12,-.17,.76,-.25,.81,.89,.6,.59,.52,.52,.06,.08,.27,.9,.71,-.06,-.28,.1,.19,-.77,-.14,-.18,-.12,-.07,.86,-.11,.3,.78,.73,-.69,.08,.13,.01,-.39,-.1,-.4,.72,.02,.88,.62,.25,-.12,.73,.59,-.11,.83,-.08,.59,.7,.76,.05,.09,-.15,.4,-.42,.49,.73,.04,.07,-.35,-.22,.87,.82,-.11,-.17,.53,-.46,-.06,-.14,.58,.56,.63,-.23,-.02,.61,.85,.17,.69,-.21,.62,-.14,.08,-.06,.15,-.23,.03,.69,.02,.88,-.09,-.18,.18,.12,.21,.44,.12,.61,-.13,-.13,-.18,-.35,.04,.08,0,.34,-.36,.16,.14,-.04,-.19,.19,.09,-.18,.04,.2,.61,.06,-.03,.84,.87,.77,.58,-.13,-.31,-.33,-.27,-.16,.69,.08,.02,-.36,-.16,-.23,-.12,-.01,.15,-.06,.71,.8,.11,-.33,.74,.91,-.25,-.28,.04,.17,.09,.26,.6,-.07,.3,.66,.91,.43,.06,.86,-.21,.01,.02,.63,-.34,-.61,.62,.84,.26,.02,.56,.78,.87,.04,.81,.06,-.12,-.24,.22,.02,.04,.83,-.11,-.11,-.29,-.02,.91,-.42,.02,.12,-.18,-.15,.12,-.14,-.2,-.03,.09,-.06,.67,-.51,-.16,-.4,-.27,-.01,.3,.28,.75,-.35,-.33,-.11,-.01,.62,-.2,.19,.32,.68,-.44,.65,.07,.29,.04,-.65,-.1,.9,.73,.05,.53,-.04,-.27,-.13,.93,.68,.82,-.02,.19,.04,.03,-.18,.42,.62,.21,.11,-.11,.04,.3,-.39,.46,.77,-.38,.21,-.1,-.31,.64,.78,-.2,.18,-.48,.66,.74,-.38,-.03,-.22,-.24,-.32,.05,-.4,.51,.11,.58,-.5,.61,-.17,.25,.73,-.06,.03,-.14,.65,.06,.09,.68,-.36,.19,-.01,-.12,-.18,-.17,.01,-.22,-.17,-.15,.67,.84,-.12,.6,.62,-.28,-.12,-.14,.7,-.48,.03,.77,.12,.15,-.2,.85,-.19,.23,-.22,.43,.49,-.2,.15,-.1,-.41,.2,.82,-.13,.36,-.03,-.02,-.01,.18,.67,.13,-.06,.54,.6,.05,.34,-.01,.77,.26,.51,.73,.66,-.27,-.02,.1,-.36,-.22,.73,.17,-.09,-.34,-.03,-.29,.83,-.01,.85,.01,.04,.68,.79,.61,.15,.06,.1,.05,-.16,-.21,.54,.49,.79,.03,.85,.5,-.51,.24,-.26,.21,-.35,.76,.68,.31,.11,-.13,.04,-.05,0,-.19,.78,-.14,.42,-.36,-.71,.03,.12,.9,.16,.13,-.39,.59,-.11,.82,-.06,.11,-.09,0,-.16,.82,-.14,-.13,-.05,-.02,.03,-.07,.26,-.04,.51,.66,-.22,-.45,-.09,.72,.04,.12,.17,.11,-.19,.14,.3,-.09,.07,.08,.02,-.08,-.08,0,.44,.86,-.11,-.32,-.31,-.24,-.26,.14,-.18,-.47,-.45,.06,-.18,-.1,-.3,-.05,.24,-.07,-.12,.14,.12,.53,.1,.69,.74,-.12,-.11,.17,.8,-.36,.64,-.7,-.52,.25,.7,.03,-.36,-.27,.49,.71,.19,-.11,.06,-.04,.11,.59,.26,-.13,.15,-.18,.01,.15,.02,-.19,.6,.18,0,-.2,-.47,-.04,-.33,-.03,-.37,.41,.8,.85,.05,.89,.73,-.04,-.13,.8,.75,.8,.59,-.82,.04,-.05,.42,.79,.14,-.02,-.1,.44,-.17,.12,-.28,.77,.07,.08,-.38,-.05,-.2,-.11,-.1,.23,.79,.05,.74,0,.72,.13,-.3,-.14,.55,.06,-.14,.03,-.61,-.17,.08,-.35,.63,-.7,.62,-.22,-.16,.09,-.09,.58,.82,-.3,-.09,-.2,.01,-.39,-.47,.16,.14,.17,.2,-.48,-.09,-.43,-.17,-.19,.08,.04,.07,.1,-.07,-.11,.1,.03,.19,.23,.02,.28,-.14,.04,-.11,.43,-.01,.02,-.21,-.24,.17,-.42,-.36,.16,.65,.06,.42,.29,.23,-.05,.71,.04,.28,.07,-.3,-.03,.25,0,-.11,.25,.76,-.35,.38,-.11,-.26,.91,-.17,-.15,-.13,-.12,.06,-.25,-.03,.49,-.13,.51,.23,-.06,.22,-.2,-.22,-.12,-.22,.71,.02,.08,-.01,.54,.01,.07,.07,.12,.71,-.12,.1,.07,.21,.84,-.07,.39,.79,-.33,.53,.78,.13,-.04,.07,-.09,.1,.2,.03,-.3,.02,.46,.05,-.45,.75,-.04,.69,.56,-.38,-.14,.8,.79,-.38,-.23,-.44,.21,.86,.3,.66,0,.65,-.07,-.18,.11,.12,-.06,-.08,-.12,-.24,.56,.03,.8,-.16,.68,-.07,.23,-.3,.03,-.14,.49,-.09,-.08,-.33,.73,.87,-.27,.04,.86,.73,-.24,.14,-.41,.77,.15,0,.18,.71,.1,.69,.55,.7,-.31,.16,-.3,.1,.74,.06,-.18,.11,-.34,.16,.1,.38,.32,-.02,-.13,.63,.32,.83,.72,.61,.31,-.16,.32,-.67,-.01,.42,.2,.82,.15,.32,-.07,-.46,-.18,.07,-.32,-.35,.13,.86,.83,.07,.79,.06,-.33,-.63,.02,.83,.01,-.18,.71,.67,-.34,.09,.44,.06,.78,.05,.62,-.4,.81,.65,-.29,.86,.23,-.27,-.38,.61,-.12,-.05,.63,.59,-.09,-.15,.6,.21,.09,.13,.07,-.06,-.01,.02,-.06,.12,-.38,.7,.11,.86,.51,.51,.12,-.01,.12,.83,.76,.82,-.12,.12,-.06,.06,.35,.62,.09,.67,-.14,-.02,.01,.2,-.01,.33,-.26,-.46,.67,-.64,.93,-.05,-.4,.11,.22,.02,.03,.02,.1,.68,-.14,.59,.25,.19,-.51,.56,-.21,-.35,-.14,.44,-.08,.43,-.15,.13,.12,.91,.02,.01,.09,-.18,.64,.69,.45,-.28,-.18,-.11,.73,.42,.44,.71,.33,-.04,-.01,.14,.72,.09,-.24,.85,.08,.18,.88,-.87,.45,-.18,.13,.17,.3,.85,.14,.09,-.28,-.32,-.34,-.19,-.29,.85,.67,.62,-.08,-.03,.77,-.29,.16,0,.12,-.48,.06,-.09,.62,.06,-.33,-.18,.4,.14,-.09,.12,.42,.02,-.2,.09,-.03,.45,.27,-.08,.02,-.16,.01,-.07,-.19,.42,.53,-.18,-.28,-.48,-.21,.48,-.03,-.06,-.17,-.55,.02,0,.68,-.04,-.19,-.38,-.38,.2,-.49,-.1,-.37,-.27,-.01,-.15,.3,.09,-.15,.31,.57,.06,.41,.02,.19,.84,.31,-.45,.26,.88,-.25,-.21,-.13,.3,.76,.38,.56,.13,.07,-.26,-.11,.68,.74,.16,-.1,-.05,.77,-.1,0,.18,.02,.39,.09,-.04,.06,-.18,.07,.71,-.13,.01,.67,-.13,.03,.65,.06,.68,.61,0,-.13,.08,.01,.17,.67,-.5,.7,.08,-.36,0,-.17,0,.35,-.42,-.36,.13,.39,.75,.5,.68,0,.06,-.08,-.01,-.07,.27,.13,.29,.59,.19,-.15,.31,.38,-.06,-.16,-.58,.14,.6,-.16,.57,.41,.23,-.21,-.07,.31,-.23,.19,-.29,.47,.19,-.11,-.15,.23,-.41,.68,.3,-.13,0,.33,.13,-.13,.07,.41,.15,.06,.75,.03,-.39,.28,.86,.12,-.11,.44,.33,.33,.09,.09,-.21,.13,.71,-.29,.31,.37,-.1,.01,.15,.24,.06,.19,.76,0,.23,.12,-.24,.55,-.06,.06,.56,-.09,-.04,.65,.28,.91,.75,-.12,.74,.62,.7,.12,-.28,-.01,.45,.22,.4,-.15,.54,.58,.16,-.03,.53,.53,.58,.33,.02,-.1,.56,.38,.23,-.15,.44,.11,.62,.04,.75,.78,.3,.64,.14,.62,-.21,.04,.35,.6,-.47,-.04,.7,.55,.38,.02,.11,.5,.77,.69,.69,0,-.06,-.1,.08,-.27,.89,-.14,.1,.63,.05,.25,.46,-.02,.7,.81,-.19,.02,.73,.02,.11,.77,-.3,-.13,.38,.32,.14,.47,.11,.58,.14,.62,-.26,.33,0,-.07,-.03,.19,-.02,.19,.82,.15,.43,.17,.17,-.1,-.13,.66,.5,.53,.51,.64,-.23,.1,-.28,.02,.23,-.05,-.27,.59,.39,.6,.02,.57,-.23,-.05,.25,-.17,.34,-.27,.12,.86,.91,.68,.76,-.15,.85,.2,.42,.11,-.56,.35,.3,-.61,.48,-.18,.62,-.15,.8,.5,.04,.72,-.08,-.07,.32,.04,.13,.37,0,-.38,.01,-.01,.12,.03,-.12,.76,.84,.53,-.13,.59,.64,.52,.57,.59,.9,.1,-.22,-.1,.56,-.02,-.41,-.23,.06,.14,-.05,.91,.8,.7,-.23,.65,.35,-.01,.22,.21,.72,.51,.11,-.32,-.02,-.07,-.12,-.07,.12,.82,.4,.49,-.39,.11,-.03,.76,.11,0,-.23,-.09,.74,-.09,.79,.54,.78,.77,.08,.41,.53,.63,.12,.23,-.11,.32,-.6,-.16,-.18,-.62,-.04,-.44,-.04,-.09,-.24,.04,.42,.43,-.25,.71,.92,-.3,.74,-.48,.04,-.32,-.05,.83,.9,.83,.46,.09,.35,.34,.29,.26,.37,.26,.68,.84,.46,.23,.09,.25,-.07,.41,.7,.74,-.11,.11,.02,-.04,.68,.1,.29,-.01,.34,.91,.53,.79,.9,.88,.72,-.09,.56,-.11,-.14,.73,-.09,-.18,.02,.67,.81,.59,.25,-.06,.67,.18,.83,.13,-.05,0,-.08,.12,.04,.63,-.42,-.03,-.18,.82,-.29,.51,-.26,-.21,-.04,.04,-.15,-.19,.8,0,-.15,.33,-.03,.31,.61,-.35,-.51,-.12,.07,.56,-.24,-.26,.49,.36,.29,-.2,.76,-.18,.7,.07,.85,-.16,.21,.09,-.02,.26,.06,.2,.05,-.68,-.34,-.13,.53,.58,.7,.46,-.28,.15,.58,.13,.28,.21,-.15,-.12,.71,.86,-.04,.44,.71,.35,.19,.19,.85,.74,.13,-.36,-.01,.2,.25,-.07,-.25,.5,.23,-.16,.04,.89,-.38,-.02,.7,-.08,-.08,.44,.15,.1,-.17,.66,-.21,.66,-.13,.07,-.22,.01,.59,.36,.03,.24,0,-.11,.87,.89,.77,.2,.8,.83,.83,.56,.78,-.16,.08,.17,.7,-.15,.34,.06,-.15,.2,.8,.68,-.48,.57,.01,.37,1,.21,-.1,.16,-.01,-.25,-.14,.13,0,.5,.92,.34,.87,.19,.1,.11,.28,.45,-.05,-.2,.36,.57,.77,-.06,-.25,-.61,.2,.81,.39,.79,.16,.81,.05,-.12,.52,-.57,.71,.8,.89,.26,.53,.3,.66,.52,-.2,.36,.82,.6,.35,.86,.77,.84,.18,.86,.5,.1,-.07,.8,.75,.75,.83,.77,-.45,.68,.7,.05,-.61,.79,.13,.91,-.49,-.03,.62,.26,.76,.68,.03,.06,.27,-.34,.85,-.12,.64,.39,.67,-.22,.03,.14,.05,.01,.15,.21,.05,.21,.87,.14,-.07,.23];export{a as rvalData};
