const a=[.17,.84,.4,.37,.04,.16,.28,.01,.19,0,.04,.09,.03,.25,.32,.6,.84,.32,.9,.24,.7,0,.33,.01,.44,.11,0,.11,.73,0,.98,0,.78,.9,0,.48,.44,.08,0,.04,.54,.08,.09,.63,.08,.04,.06,0,0,0,0,.07,.98,.35,0,.47,.76,.22,.01,.41,.02,.24,0,.83,0,0,.21,.02,.73,.69,.29,.64,0,.06,.21,.17,0,.01,.43,0,.2,.37,.64,.24,.38,0,.35,.71,.29,.79,0,.19,0,.2,.14,.22,.21,0,.02,0,.7,.03,0,.27,0,.77,.78,.43,.92,.01,.42,0,0,.59,0,.7,.01,0,0,.92,.43,.1,.39,.8,.01,0,.75,.02,0,.58,0,.38,.92,0,.01,.22,0,0,0,.08,.02,.54,0,.27,.29,.25,.62,.14,.13,.31,.06,0,.71,.3,0,0,.76,.06,.47,.22,0,0,.57,.09,0,0,.2,0,.26,.48,.19,0,.01,0,.02,0,.73,0,0,.56,.78,.14,1,.39,0,.1,.2,.24,0,.28,.67,.01,.2,0,0,.16,.02,.16,.24,0,.26,.13,.93,.3,.66,.01,0,0,0,.09,0,.01,.06,.16,.39,.56,.31,0,0,.03,.17,0,.39,.79,.21,.81,0,0,.07,0,.04,.48,.68,.28,.03,.29,.03,.54,.09,.62,0,.02,0,0,.01,.06,.28,.02,.08,.81,.01,.15,0,.04,.12,.72,.57,.26,.01,.27,.53,0,.04,.05,.33,0,.01,.07,.72,.22,0,.73,.77,.02,.5,.33,0,0,.03,0,0,0,.47,.85,0,.37,0,.45,0,0,.2,0,.18,.09,.01,.12,.5,.01,.04,0,.55,.86,0,.14,.91,.8,0,0,.03,.51,.05,.75,.45,.16,.08,0,0,0,.02,0,.02,.22,.14,.13,0,0,.45,.87,.71,0,.11,.38,.05,.51,.02,.43,0,.49,.93,0,0,.23,.09,.51,.71,.36,.06,0,.02,0,0,0,.13,0,.55,.52,.2,.12,.02,.42,.59,.17,0,.56,.84,.4,.98,.86,.01,1,0,.07,0,.69,.42,.03,.13,.01,.93,0,.25,.19,.27,.2,.19,.3,.04,.24,.75,.88,.05,.17,.61,.04,.1,.53,0,.94,.52,.01,.17,.32,.09,0,0,.07,.19,.1,.03,.95,.01,.04,.33,.03,.19,.28,.03,.42,0,.06,.62,.95,0,.1,.56,.98,.91,.78,0,0,0,.92,.78,.15,0,.03,.04,.18,.27,.1,0,.08,0,.66,0,.02,.99,.13,.01,0,.08,0,.27,.86,.57,.22,0,.89,.62,.36,.02,.07,.52,0,.81,.02,.77,.6,.01,.4,.35,.73,.36,.28,0,.72,.09,0,.13,0,0,.45,.68,0,0,.25,0,.58,.01,.05,.61,.07,.1,0,.11,.64,0,.92,.32,.02,0,.45,.02,.09,.05,.83,.94,.45,.92,0,.04,.41,0,.3,0,0,.04,0,0,.11,.04,.36,.27,.46,.9,.1,.2,.77,.06,.16,0,0,.02,0,.28,.83,0,.73,.74,.22,.3,0,.36,0,0,.67,.23,0,0,.33,0,.8,.07,.63,0,.23,0,0,.06,.79,.04,0,0,.13,.12,.11,.29,.56,.02,1,.05,.08,.09,.03,.6,.28,.5,0,0,.21,0,.78,0,.35,0,.02,.82,.13,0,.48,.13,.95,.47,.04,.02,.42,.52,.04,.39,.11,.07,.1,.17,0,.19,0,0,0,.67,.44,.74,.31,.07,.02,.06,.18,.67,.07,.3,.27,.01,.72,.09,.72,.01,0,0,.07,.02,.05,.09,.52,.83,0,.44,0,.95,0,.23,0,.05,.97,0,.49,.47,.03,.44,.01,.2,0,.17,.09,0,.59,.74,.8,.38,.24,.66,.58,.66,.07,.83,0,.37,.08,.51,.14,.06,.33,0,.06,.8,0,.01,0,.01,.12,.22,.26,.2,.36,.98,.1,.36,.93,.71,.04,.26,.59,.85,.07,.32,.25,.81,.14,.57,.85,0,.01,.12,.01,0,.38,.11,.64,.67,.61,.66,0,.51,.01,.02,.25,.46,.52,.03,.4,.99,.17,.01,.16,.36,.39,.17,.16,.45,0,.03,.03,.03,.06,.91,.15,0,0,.37,.8,.57,.31,0,.2,0,0,.17,.27,0,.25,0,0,.04,0,.18,.05,.48,.12,0,0,.41,.87,.19,0,.96,.01,0,.24,.07,.3,.05,.44,.34,.04,.5,.82,0,.18,0,0,.79,0,.81,0,.13,.09,.25,.01,0,.03,0,0,0,.05,0,.09,.32,0,.6,0,.01,0,.05,.19,.17,.1,.25,.25,.08,0,0,.99,.42,.06,.76,0,.11,0,.69,0,.09,.84,.15,.25,.06,.49,.21,.67,.33,.01,.08,.73,.17,.96,.01,.54,.79,.01,.31,.03,.84,0,.08,.26,.23,0,0,.08,.44,0,0,.19,.19,0,0,.61,.31,.32,0,0,0,0,0,.17,0,.77,.86,0,.03,.05,0,0,.68,.03,.02,0,.17,0,.88,.02,.56,.26,0,.41,.22,.09,.75,.09,.05,.46,.18,0,.06,.56,.66,0,.72,.52,.07,.41,.3,.45,.32,.72,.51,.86,.12,.47,.43,0,.01,0,.72,0,0,0,0,.07,.25,0,0,.93,.22,.87,.28,.42,.15,.03,.96,.43,.63,0,.01,.05,.5,.11,.04,.54,0,.91,.12,.27,0,.05,.01,.1,.04,.11,0,.06,.21,.49,0,.75,.41,0,0,.43,.25,.21,.03,.04,.87,.73,0,.89,.13,.92,.22,.87,.06,.34,.02,.22,.01,.24,.08,.56,.22,0,0,.53,.09,0,0,0,.1,0,0,.06,.07,0,0,.01,0,.01,.1,0,.75,.39,.58,.58,.44,.78,.93,.58,.18,0,.12,.46,.48,.06,.07,0,0,0,.5,.05,.05,.18,.92,.34,0,.07,.05,0,.07,0,.16,.54,.13,.19,0,.57,.57,0,.05,0,.47,.02,.56,.35,.31,.78,.04,.32,.65,0,.25,.79,.36,.11,0,.04,.53,0,.91,.09,.43,.13,.07,1,0,.09,.02,.05,0,0,0,.02,.17,.64,0,0,.26,.38,0,.33,.88,0,.36,.27,.1,0,.77,.93,0,0,.17,.19,0,.21,.58,.15,.01,0,.18,0,.07,.21,.39,.6,.27,.02,0,.07,.53,.06,.51,.92,.55,0,.7,0,0,.34,0,.02,.22,.09,.01,.94,0,.09,0,.49,.06,.43,.87,.04,0,.48,0,.28,.16,.29,.14,.07,.25,.01,.32,.43,.75,0,.21,.21,.04,.29,.42,.6,.05,.56,.62,.01,0,.1,.93,0,.17,.01,.86,.38,.96,.49,.04,0,.96,.04,.22,.02,.02,0,0,.01,.66,0,0,.53,.46,.74,.17,.22,0,.62,0,0,.88,.08,.3,.35,.85,.56,.42,.92,.2,0,.91,.01,.24,.05,.11,0,0,.04,.8,.23,.01,0,.95,.27,0,0,.64,.08,.51,0,.94,.06,.91,.07,0,.28,.16,.02,.1,.28,.36,0,.27,0,.06,0,0,0,.02,.44,.1,.48,.04,.71,.85,.35,.32,.29,.61,.96,.32,.53,.03,.61,.05,.3,.14,.24,.66,0,.04,.05,0,.5,0,.02,.03,.83,.01,.11,.2,0,0,0,0,.13,.68,.32,.14,0,.01,.01,.96,.17,.04,.73,0,.1,.4,0,.82,.09,.61,.16,.99,.39,0,.28,.09,0,0,0,0,.02,.05,0,.96,.03,.02,.34,.1,.27,.01,0,.99,.2,0,.78,.56,0,.78,.1,0,.86,.61,.43,.01,.44,.4,.39,0,.11,.87,.1,0,0,.99,.5,0,.02,.49,.09,.13,.36,.09,.02,.09,.19,.48,0,.69,.64,.1,0,.04,.78,0,0,.03,0,.1,.02,0,0,.07,0,.83,.12,.22,.93,0,.11,0,0,.04,.22,0,.88,.05,.12,0,.14,.35,.16,.02,.62,.01,.94,.36,.23,0,.24,0,.37,0,.03,.02,.22,0,0,.54,0,0,.3,.51,.23,0,.59,.04,.13,.03,.1,.68,0,.02,.99,.19,.17,.7,.14,.17,.49,.08,0,.25,.21,.09,.92,0,.03,.42,.74,.5,.37,0,.45,.07,.03,.03,0,.03,.26,.69,.04,0,.88,0,.1,0,.02,.04,0,.85,.1,.14,.19,.1,.01,.2,.85,.03,.06,.36,0,0,.25,.28,0,.04,0,0,.03,.6,.32,.71,.42,0,.56,.39,0,0,.51,0,.26,0,.54,.01,.42,.92,.05,0,.27,0,.71,.7,0,0,.19,0,0,.54,0,.45,.71,.39,.59,.05,.75,.02,0,.62,.01,.14,.01,0,.33,.34,.32,.02,0,.58,.59,.01,.18,0,.2,0,0,0,.01,.57,.09,.04,.09,.97,0,.17,.34,0,.94,0,.94,0,.88,0,.74,.41,0,.01,.01,.27,.82,0,0,.17,.22,.03,.43,.01,0,.1,0,.05,.65,.3,0,.58,.11,.01,0,0,0,.5,0,.01,.33,.09,0,.43,.05,.35,.25,0,0,0,.05,0,.78,.02,.13,0,0,0,.16,.19,.67,.01,0,0,0,.03,0,.68,0,.15,.46,0,.73,.22,.17,.77,.17,.6,.04,.35,0,0,.17,.23,0,.01,.81,0,.01,0,.03,.68,.15,.26,0,.09,0,.8,.74,.09,.02,.75,.34,.04,.25,0,.62,0,.01,.07,.02,.04,.04,.07,.05,.03,0,.28,.93,.2,.02,0,.04,.9,0,.1,.56,0,.01,.02,0,.03,.98,.88,.16,.37,0,.12,0,0,0,.55,0,.75,.01,.01,.36,0,.25,.14,0,.93,.3,.18,0,0,0,.02,.02,.01,.07,.92,0,.39,.15,.27,.15,.69,.04,0,.12,.01,.27,.55,.06,.9,.21,.59,.24,.18,.83,0,.54,0,0,0,.85,.29,.61,.67,.89,0,0,0,0,.16,.41,.1,.09,0,.51,.27,.35,.02,.53,.03,.39,.03,0,0,.14,.21,.02,.74,.66,.04,.03,.33,.28,.44,.94,.79,0,.08,.14,0,.93,.09,.41,.67,.86,0,.27,.3,.25,.82,.85,.88,.04,.01,0,.35,.82,.51,.22,.02,.33,0,0,.4,.58,.53,.1,.05,.88,.09,.09,.04,0,0,.26,.43,.26,.02,0,0,0,.2,0,.24,.01,0,0,.34,.01,.18,.08,0,.71,.01,.24,0,.09,.49,.95,.16,.7,0,.32,.26,.57,0,.92,.01,.71,.46,0,0,0,.92,0,.24,.07,.96,.67,.85,.32,.4,.02,0,.33,.15,.18,.1,.49,.07,0,.82,.14,.71,.01,.45,.69,0,.2,0,.3,0,.91,.16,0,.45,.09,.78,0,0,0,.99,.3,.06,.15,.04,.17,.74,.01,0,0,.71,.92,.17,.64,.58,.02,.76,.8,.01,.08,.83,.68,.55,0,.03,0,0,.76,.28,.2,.1,.65,.04,.99,.15,0,0,.66,.04,.12,0,0,.11,0,.52,.26,.07,.01,0,.44,0,.35,.11,.65,.06,0,.24,0,.63,.07,.14,.04,.01,.02,0,.44,.46,.49,.99,.26,.26,.46,0,.12,.57,.27,.4,0,.65,.38,.84,.24,.32,0,0,0,.11,0,0,.97,.66,.38,.02,.31,0,.43,.07,.93,.83,.96,0,.82,.03,.03,.01,.94,.48,.89,.43,0,.37,0,.12,0,.5,0,.25,.35,0,0,.38,0,.6,.02,0,.72,.06,.09,0,.32,0,.09,.04,.1,.17,.13,.28,.29,0,.99,.13,0,0,.36,.69,.29,.34,.84,.14,.76,0,.78,0,0,.05,.65,.26,.14,.53,.02,.17,.01,.14,.22,.45,.75,.32,.82,.47,.17,.01,.13,.05,.1,0,.4,0,0,.09,.11,.91,.07,0,.72,0,.4,0,.01,.38,0,.28,.27,.71,.52,.67,.03];export{a as pvalData};
