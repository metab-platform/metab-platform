const a=[0,0,0,.21,0,1,.01,.86,0,0,0,.78,.97,0,0,.84,.01,.64,.11,.85,.56,0,.4,0,0,0,0,.26,.01,.02,0,0,0,.62,.16,.22,0,0,0,0,.76,0,0,.55,.16,0,.15,.13,.93,0,.01,.29,.01,0,0,0,0,.77,.02,0,0,0,0,.49,.04,.02,0,0,.69,.5,.36,0,0,.03,0,.99,.12,0,0,.45,0,0,.45,0,.13,.01,0,.19,0,0,.24,.22,.01,0,.38,.54,0,.01,.21,0,.36,0,0,.31,0,.18,.12,.4,0,0,.6,0,.83,0,.29,0,.33,.01,.01,0,.58,.21,0,.2,.91,0,0,.01,.06,0,.54,0,.32,.08,0,.21,.42,.02,.03,.15,0,.86,0,0,.46,.14,.86,.39,0,.16,0,.58,.94,.77,.97,.38,.9,.5,.04,0,.86,0,.6,0,0,0,0,.01,.84,0,.5,.06,.93,.05,0,.12,.91,.27,0,0,.69,.44,.32,0,0,.74,.66,.36,.11,.03,.26,.07,.15,0,0,0,0,.02,.52,0,0,0,0,.82,0,0,.72,0,0,.81,.54,0,.3,0,.85,0,.68,.32,.13,.01,0,0,0,0,0,0,.98,.05,0,.08,.48,.35,0,0,.03,.94,0,.03,.87,.63,0,0,.76,.47,.02,.25,.29,.12,.36,.57,.31,.16,0,.01,0,.84,.13,0,.66,0,.59,.82,0,0,.41,0,.13,0,.06,0,.35,0,0,0,0,.8,.95,0,0,.91,.03,.01,0,0,.02,0,.39,0,.54,.11,.98,0,0,.76,.4,0,0,0,.6,.08,.58,0,.04,.13,.3,0,.66,0,.71,0,0,.49,.24,.4,.01,.09,.84,.28,0,0,0,.4,0,0,.8,.02,0,.02,.53,.01,0,0,.02,.35,0,.49,.1,0,.4,.01,0,0,.03,.46,0,0,.19,.01,0,.03,0,0,.18,.02,0,0,0,.56,0,0,0,.15,.08,.22,.59,0,.63,0,0,.44,.36,0,0,.27,0,.03,0,0,.89,.11,.35,.72,.49,.29,.96,0,.32,.91,0,0,0,.93,.36,.97,.96,0,0,.04,.03,.52,.16,.26,0,0,.02,.23,0,0,0,0,0,0,.02,0,.39,.92,0,0,.02,0,.94,0,.45,.91,0,0,0,.61,.02,0,.55,.13,0,.58,.92,0,.02,0,0,0,0,0,0,.92,.01,0,0,0,.71,0,0,0,0,.66,.49,.77,.03,0,.9,0,0,0,0,0,.59,.19,0,.84,0,0,.75,0,0,.71,.1,0,0,.1,0,.01,0,0,0,0,.01,.51,0,0,0,0,.45,.88,.04,.01,0,0,.9,.46,0,.37,.02,.05,0,0,0,.1,.73,0,0,0,0,.56,0,.29,.01,.08,.24,.47,0,0,.36,0,.6,.62,0,.33,.06,.01,.5,0,.07,.72,.12,.21,.5,.95,.04,0,.01,.28,.42,.08,.63,.77,.77,.14,1,.76,0,.67,.08,0,0,0,0,.49,0,.33,0,.6,0,.11,.03,.69,.49,.06,.29,.96,.06,.93,0,0,.03,.01,0,0,.22,0,.01,.06,.56,.11,0,.26,0,0,0,0,.27,0,.24,.47,.87,0,.93,0,0,0,0,.09,0,0,0,.04,0,.01,.2,.04,.34,.73,.58,0,.96,.08,.18,.86,0,.32,.8,.94,.59,.51,.05,.58,.51,.03,0,.18,0,.04,.39,0,.01,.01,0,0,0,.85,.08,.01,.36,0,0,.55,.02,0,.01,0,.41,0,.09,0,.34,0,0,.24,0,.42,.31,.33,0,0,0,.23,0,.31,.37,.32,0,0,0,.8,.19,0,0,.06,0,0,0,.25,.57,.03,0,0,.97,.02,0,0,0,.12,.17,.01,.25,.3,.2,.02,0,.08,0,0,0,.16,0,0,.74,.85,.05,0,.27,0,0,.71,.07,.13,.25,.23,.65,.19,.08,.13,.33,0,0,.65,0,0,.01,0,0,0,0,0,0,.9,0,.51,0,.16,.18,.52,0,0,0,.34,.75,0,0,0,.36,0,.03,.67,.11,.01,0,.07,.54,.01,0,.64,.01,0,0,.01,0,0,0,.23,.46,.64,.09,.66,0,.83,.05,0,.06,.75,0,.03,0,.6,.54,0,0,0,0,0,.53,.17,0,.89,0,0,0,.01,0,0,0,0,.94,.02,0,0,0,0,0,.01,.12,.65,.91,.05,0,0,0,.68,0,.42,.31,0,.63,.05,.62,0,.91,0,.16,.04,.28,.34,.84,0,.77,.16,.88,.15,.14,.11,.1,0,0,0,.89,.73,.03,0,1,.06,0,.82,.61,.04,0,.53,.98,.02,.17,.27,.03,.38,0,0,.43,0,.05,.55,0,.77,.14,.19,.01,.23,.71,.06,.54,.22,.13,.13,.12,.7,.03,0,.03,0,0,.72,.17,0,0,.55,0,0,0,0,0,.89,0,.07,0,0,.01,.16,.81,.83,.19,0,.41,.17,.86,.93,.14,.27,.27,.1,0,0,.58,.84,.12,.9,.47,.5,0,0,0,0,.67,0,0,.15,.08,0,0,0,0,0,0,.53,0,0,.69,.68,.67,0,.57,.31,.59,0,.56,.19,.95,.91,.41,.37,.57,0,0,.7,0,.27,0,.23,.8,.73,0,.16,.71,.38,0,.07,.4,.01,0,0,0,.57,.65,.13,0,0,0,.32,0,.21,.06,.96,.01,.53,.85,.01,0,.25,.04,.36,.17,.4,.85,.95,.34,.26,.81,.73,.28,.65,.29,.18,.09,.09,.07,.63,.67,0,.15,.43,.41,.07,0,0,.01,.47,0,.55,0,0,.39,.09,0,.35,.52,.98,.79,.55,.01,.01,.78,0,0,.88,0,.9,.65,0,.03,.32,.28,.09,.52,.01,.09,0,.78,0,0,.5,0,.05,0,.83,.63,0,.26,.28,.77,0,.01,.02,.01,0,0,.28,0,.06,0,0,.82,0,0,.56,0,0,.87,.01,.86,.82,0,.39,.21,.02,0,0,.66,.01,0,.01,0,0,.64,.14,0,0,.09,0,0,0,0,0,0,.44,0,.67,.35,0,0,.58,.07,.05,.09,0,.05,0,.02,0,.02,.47,0,.91,.14,0,.43,.04,.52,0,0,.02,.38,0,0,.25,1,.05,0,1,.43,0,0,.38,0,0,0,.17,.76,0,.04,0,.06,.32,.38,.55,.38,.33,0,0,.04,.02,0,0,0,0,0,0,.93,.24,0,.02,0,.18,0,.32,0,.88,.6,.14,.68,.03,0,.61,0,0,.69,0,1,.24,0,.59,0,.73,.03,0,0,0,.63,0,.5,0,.01,0,.06,0,0,.83,0,.97,.01,.03,0,.24,.32,0,0,.42,.42,0,0,.38,.6,.08,.95,.04,.08,.66,.04,0,0,.13,0,0,0,.95,.46,.38,0,0,0,.32,.53,.31,.36,.01,0,.96,0,.22,.17,.27,.33,.65,0,0,.36,0,0,0,.65,.16,.59,.01,0,.01,0,.51,0,.5,0,.05,.09,.05,0,0,.42,.25,0,.52,0,.61,.01,.37,0,.27,.59,.59,.13,0,0,0,.02,.1,.4,0,0,0,0,0,.63,.23,.22,0,0,.26,0,.24,0,0,0,0,.84,.3,.01,0,0,.95,.02,.72,.05,.01,.73,.86,0,0,0,.03,.67,0,.01,0,.7,.04,.01,.71,.96,0,0,.04,.03,0,.06,.74,.23,0,.15,.06,0,.04,0,0,.06,.01,.08,0,.8,.36,0,0,.93,.28,0,.91,0,.01,.72,0,0,.35,.03,0,.01,.11,0,0,.01,0,.7,.09,.42,.45,.84,0,.03,.72,0,0,.63,0,.02,0,0,.01,.62,.29,0,0,.46,.43,.48,0,0,0,.24,0,0,.17,0,0,.24,.54,.73,0,.38,.12,.01,.4,0,.29,.71,.02,.63,.17,0,.28,.71,0,.19,.25,0,0,0,0,.7,0,0,.41,0,0,.03,0,.64,.33,.51,.09,.66,0,0,.07,.24,0,0,0,0,.65,.36,.91,.16,.66,0,.01,0,0,.01,.36,.01,0,.02,.01,0,.04,0,.03,0,0,0,.23,.33,0,.52,0,.42,0,0,.34,.77,0,.02,0,0,.53,.85,0,.62,.83,.26,0,.95,.08,0,0,0,0,0,0,.28,0,0,0,.46,0,.49,.05,0,.03,0,0,.31,.03,0,.01,.57,0,0,.18,.07,.03,.3,0,.05,0,0,.57,.24,0,0,0,0,.07,0,0,0,0,.17,.39,0,.82,0,.29,0,0,.57,.07,0,0,0,0,.1,.01,0,0,0,.18,0,0,0,.71,0,0,0,0,.73,0,.42,.01,0,0,.03,.79,0,0,0,0,0,0,0,0,0,.53,.07,.04,.01,.43,0,.12,.21,0,.52,0,0,0,0,0,.03,.61,0,0,0,0,.12,.98,0,0,0,0,0,0,.45,0,.01,0,.98,.63,.9,.24,.88,0,0,.03,0,.16,0,.72,.28,0,0,0,0,0,.59,.27,.9,0,0,.85,.14,0,0,0,.92,0,.43,.38,0,.13,0,.47,.22,0,0,0,0,.53,0,0,0,0,0,0,.01,0,0,.11,0,.68,0,0,.71,0,.04,.04,0,.01,.12,0,0,.75,.74,.14,.07,.9,.89,0,0,0,.44,0,0,0,0,0,0,.75,.17,1,0,.98,0,.17,0,0,.1,0,0,0,.12,0,0,.04,0,.96,0,0,0,0,.67,.88,.29,.65,.04,0,0,0,.2,0,0,0,.58,.14,.05,.47,0,.12,0,0,0,0,.88,0,0,0,.02,.06,.33,0,0,.18,.43,0,.41,0,.31,.91,.03,.45,0,0,.22,0,0,.03,0,.01,0,0,.87,0,0,0,0,.2,0,0,0,0,0,.09,0,0,0,0,0,0,.47,0,0,0,.6,.16,.81,.77,0,.1,0,.61,0,0,0,0,0,0,0,.94,0,.43,0,0,.43,.27,.88,0,0,0,0,.05,0,0,0,.05,.99,.52,.65,.52,.26,0,0,.08,.39,0,.16,0,.07,.75,.94,.73,.05,.09,0,.61,.41,0,.03,.01,0,.04,0,.03,.75,0,.48,.79,0,0,0,.36,0,.61,0,.95,0,.22,0,0,.92,0,.06,0,.24,0,.04,.07,0,0,0,0,.01,.89,0,0,0,.7,.28,.17,0,0,.93,0,0,0,0,.96,0,0,.07,.68,0,0,0,.42,0,0,0,.72,.43,0,.02,.93,0,.24,.83,0,.71,.99,.13,0,0,0,.56,.98,.13,.63,0,0,.05,.58,.06,.73,0,0,0,.94,0,0,0,0,0,.32,.54,0,0,.37,.06,.79,.08,.75,0,0,.04,0,.15,0,0,.58,.01,.93,.63,0,.03,.58,.26,0,0,0,0,0,1,0,.02,.02,.64,.6,.15,0,0,.16,.2,0,0,0,0,0,0,0,.04,.83,0,0,0,0,0,.25,0,.12,0,0,.21,0,0,0,0,0,0,0,.94,0,0,0,.15,0,0,0,0,0,.06,0,0,.03,0,0,.61,0,0,.68,0,0,0,0,.05,.87,.74,.48,0,.38,0,0,0,.14,.03,.6,.1,.99,.49,0,.88,.23,0,.99,.15,0];export{a as pvalData};
