const a=[.92,.17,.18,.07,.23,.23,.52,.26,.81,.39,.41,.34,.3,.01,.07,.88,.47,.72,.14,.17,.05,.8,.37,.61,.43,.06,.71,.17,.73,.4,.03,.35,.01,.96,.71,.07,0,.27,.49,0,.13,.17,.07,.98,.64,.06,.18,.12,.12,.01,.25,.26,.02,.16,.01,.16,.17,.74,.02,.78,.97,0,.06,.63,.07,.44,.12,.23,.56,.39,.41,0,.57,.12,.46,.52,.35,.28,.5,.12,.43,.66,.43,.27,.86,.42,.42,.18,.11,1,.45,.59,.3,.6,.74,.78,.72,.1,.89,.32,.81,.21,.19,.58,.14,.57,.31,.49,0,.45,.9,0,.91,.8,.09,.04,0,.51,.44,.87,.96,.41,.03,.57,0,.1,.4,.01,.02,.01,.18,.04,.28,0,.02,.57,0,.74,.41,.2,.01,.76,.28,.38,.38,.24,.16,.22,.93,.44,.49,.58,.56,.08,.2,.71,.13,.02,.53,.22,.02,.25,.94,.94,.93,.05,.1,.7,.81,.62,.32,.29,.15,.3,.01,.97,.15,.3,.81,.06,.13,.53,.99,.05,.1,.24,.23,.01,.17,.79,.54,.62,.47,.5,.12,.02,.61,.1,.46,.74,.79,.58,.01,.2,.23,.04,0,.05,.15,.4,.17,.14,.14,.12,.83,.15,.17,.36,.98,.02,.37,.19,.37,.11,.26,.02,.18,.44,.07,.49,.71,.86,.12,.39,.2,.42,.64,.05,.28,.85,0,.49,.1,.01,.33,.24,.23,.05,.9,.51,.73,.93,.05,.97,.06,.47,.11,.02,.47,.44,.06,.56,.1,.02,.95,.28,.13,.2,.85,.42,.02,.11,.01,.06,.1,.09,.29,.89,.15,.12,.09,.03,.2,.25,.1,0,.11,.01,.74,.13,.72,.65,0,.33,.72,.27,.11,.33,.57,.01,.09,.07,.86,.51,.94,.02,0,.01,.53,.03,.48,.51,.09,.63,.45,.01,.38,.46,.15,.01,.14,.14,.23,.09,.06,.16,0,.45,0,.2,.59,.06,.03,.54,.28,.53,.1,.01,0,.04,0,.58,.56,.97,0,.02,.91,.8,.02,0,.02,.11,.08,.28,.73,.5,.29,.34,.73,.4,.97,.85,.33,.79,.08,.02,.11,.02,.42,.94,.64,.3,.94,.93,.06,.5,.74,.71,.77,.07,.16,.94,.16,.47,.95,.19,.25,.87,0,0,.12,.01,.79,.01,.02,.04,.37,.4,.12,0,.57,.69,.29,.08,.7,.51,1,.07,.6,.21,.19,.39,.26,.27,.48,.08,.16,.22,.11,.22,.12,.04,.06,.31,0,.01,0,.67,.21,.01,.38,.77,.84,.15,.18,.57,.65,0,.03,.34,.37,.74,.15,.75,.02,.43,.01,0,.69,.5,.23,.09,.06,.84,.79,.47,.59,.01,.69,.23,.95,0,.39,.31,.02,.82,.08,.96,.89,.07,.33,.02,0,.12,.13,0,0,.94,.01,.05,.07,.17,.3,.73,.09,.42,.1,.04,.08,.64,.34,.37,.86,0,.08,.06,.14,.76,.23,.03,.03,.03,.55,.78,.41,.34,.83,.01,0,.95,.8,.66,.22,.24,0,.39,.11,.03,.51,.92,.22,.08,.52,.62,.78,.44,0,.09,.16,0,.43,.1,.97,0,.54,.47,.22,0,.02,.01,.02,.67,.03,.01,.63,.3,.01,.01,.14,.47,.17,.01,.01,.08,0,.06,.5,0,.01,.24,.01,.69,.02,.44,.77,.67,.78,.72,.09,.62,.28,.25,.06,.01,.78,.04,.06,.31,.53,.59,.86,.01,.45,.7,.12,.49,.02,.9,.12,0,.55,.38,.31,.47,.48,.28,.2,.48,.37,0,.67,.51,.53,.06,.01,.73,.05,.34,.02,.23,.3,0,.08,.59,.93,.97,.03,.24,.77,0,.84,0,.07,.41,.84,.15,.4,.51,.6,.1,.21,.08,.1,.25,.05,.26,0,0,.97,.81,.11,.45,.23,.1,.02,.13,.32,.03,.18,.19,.81,.48,0,.02,0,.92,.97,.08,.66,.8,.04,.41,.01,.11,.71,.3,.46,.89,.26,.67,.06,.25,.56,.19,.09,.13,.36,.71,.06,.12,.85,.01,.01,0,.24,0,.14,.06,.01,.79,.85,.64,.69,.07,.47,.41,.02,.48,.33,.66,.16,.64,.41,.29,.14,.01,.87,.9,.03,.87,.27,0,0,.04,.12,.01,.45,.39,.6,.45,.79,.22,0,.81,.13,.49,.8,.05,.2,.76,.89,.01,0,.75,0,.01,.01,.06,.3,.65,.09,.03,.42,.13,.86,.63,.35,0,.35,.55,.07,.04,.92,0,.08,.19,.04,.87,0,.77,.02,.65,.02,.07,.93,.48,.07,.36,.64,.58,.63,.39,.06,.53,.13,.06,.66,.25,0,.55,.26,.14,0,.02,.55,.4,.05,.34,.38,.73,.17,.42,.91,.19,.02,.36,.01,.21,.02,.69,.84,.02,.85,.59,.01,.41,.36,.75,.11,.7,.88,.26,0,.11,.09,.08,.5,.97,.15,.01,.29,.85,.43,.21,.08,.06,.02,.05,.71,.16,.45,.01,.71,.35,.37,.28,.11,.62,.13,.96,.03,.31,.2,.05,.57,.92,.38,.06,.01,.05,.25,.7,.05,.32,.14,.51,.14,.8,.47,.34,.69,.02,.24,.47,.02,.74,.9,.04,.02,.02,.89,.26,.59,.08,.02,.38,.97,.01,.2,.4,.37,0,.04,.15,.03,.47,.08,.46,.02,.12,.06,0,.04,.34,0,.75,.56,.99,.68,.39,.16,.13,.07,.44,.5,0,.18,.01,.47,0,.29,.14,.2,.7,.9,.12,.28,.02,.02,.39,.09,.13,.22,.14,.03,.35,.65,.02,.57,.54,.66,0,.2,.38,.55,.4,.94,.5,.58,.3,.35,0,.53,.29,.03,.31,.23,.02,.82,.24,.21,.22,.77,.01,0,.59,.11,.35,.68,.86,0,.83,.05,.7,.6,.09,.8,0,.06,.6,.45,.47,.63,.59,.26,.35,.67,.27,.39,.06,.19,.03,.25,.2,.04,.21,.14,0,.03,.64,.01,.07,.07,.11,.57,.22,.18,.51,.15,.74,.47,.74,.99,.45,.89,.24,.06,.72,.04,.09,.56,.15,.26,.06,.97,.75,.07,.65,.03,.83,.96,.61,.33,.11,0,.08,0,.98,.06,.12,.02,.82,.17,.19,.22,.01,.04,.3,.02,.6,0,.02,.14,.21,.3,.15,.34,.41,.82,.18,.14,0,.99,.01,.49,.65,.91,.18,.13,.01,.01,.04,.01,.52,.23,.16,.21,.62,.11,.27,.02,.73,.97,0,.82,0,.06,0,.2,.34,.41,.61,.77,.64,.6,.23,.64,.24,.84,.64,.42,.02,.29,.92,.73,.43,.38,.78,.02,.01,.96,.48,.18,.81,.07,.03,.01,.36,0,.01,.05,.14,.65,.25,.59,.69,.19,.25,.92,.01,.01,.14,.43,.03,.57,.03,.5,.86,.55,.84,.56,0,.03,.25,.5,.36,0,.68,.41,0,.02,.99,.71,.11,.15,.5,.04,0,.7,0,.27,.03,.69,.49,.08,.36,.47,.3,.14,.53,.84,.54,.47,.88,.02,0,.07,.02,.86,0,.07,.1,0,.17,.16,.99,.01,.28,.51,.7,.09,.46,.05,.11,.76,.9,0,.01,.51,.16,.7,.37,.23,.26,.08,.03,.75,.86,.14,0,.73,.71,.92,.03,.19,.2,.55,.31,.56,.18,.1,.94,.85,0,.21,.22,.76,.1,.1,.27,.92,.68,.34,.52,.55,.05,.02,.08,.9,.52,.56,.59,0,.23,.66,.78,.19,.73,.5,.49,.01,.04,.09,0,.46,.44,.46,.16,0,.01,.1,.29,.3,.1,.77,.95,.13,.28,.11,.45,.78,.04,.55,.01,.14,.48,.85,.91,.76,.06,.17,.03,.16,.01,.53,.21,0,.54,0,.96,.2,.04,.11,.59,.96,.75,.07,.5,.25,.02,.84,.33,.13,.05,.59,.71,.01,.58,.03,.88,.01,.19,.95,.65,1,.23,.33,.73,.02,.53,.77,0,.03,.29,.59,.24,.94,.74,.02,.54,.5,.97,.18,.32,.08,.04,.57,.19,.24,.05,.41,0,.04,0,.21,.61,.52,.29,.15,0,.24,.21,.01,.02,.35,.85,.72,.08,.37,.6,.1,.5,.68,.27,.08,.15,.09,.01,.73,.01,.1,.23,.1,.12,.03,.01,.01,.01,.07,.31,.93,.18,.07,.71,.01,.11,.03,0,.01,.15,.11,.07,0,.09,0,.42,.03,.99,.06,.39,.1,.08,0,.14,.01,.3,.06,.19,.01,.16,.01,.55,.86,.02,.96,.37,.24,.58,.01,.84,0,0,.14,.76,.47,.04,.71,.02,.62,.13,.32,.39,.35,.66,.5,.19,0,.08,.86,.03,.66,.25,.36,.47,.58,.26,.57,.23,.46,.59,.32,0,0,.89,.54,.04,.98,0,.32,.03,.62,0,.48,.87,.21,.01,0,.8,.4,.41,.39,.8,.73,.33,.05,.61,.08,.61,.72,.09,.74,.33,.14,.63,.69,.23,.13,.07,.2,.91,.67,.31,.04,.08,.01,.83,.17,.07,.67,.13,.01,.73,.01,0,.06,.13,.71,.85,.74,.1,0,.1,.73,.97,.59,0,.01,.01,.62,.32,.86,.78,.26,0,.49,.56,.29,.93,.11,.42,.8,.53,0,.1,.64,.58,0,.93,.18,.06,.23,.9,.18,.04,.56,.41,.23,0,.35,.03,0,.11,.13,.09,0,.02,.39,.03,.03,.03,.01,.33,.06,.14,.52,.61,.04,.46,.01,.01,.06,.6,.73,.64,.98,0,0,.01,.46,.67,0,.09,1,.06,.33,0,.23,.03,.18,.25,.01,.09,.12,.49,.21,.52,0,.79,.01,.06,.08,.81,.76,.01,.63,0,.03,.04,.07,.19,0,.48,.84,.62,.11,.03,.82,.79,.11,.7,.04,.04,.69,.65,.07,0,.89,.05,.12,.03,0,.12,.56,.02,.67,.11,.6,.07,.43,.01,.75,.86,.72,.4,.02,.84,.01,.43,.02,.02,.01,.06,.64,.68,.94,0,.34,.1,1,.04,.04,.22,.69,.03,.73,.87,.21,.63,.24,.04,.46,.02,.03,0,0,.02,.18,0,.13,0,.91,.04,.95,0,.1,.14,.86,.09,.18,.02,.08,.06,.06,.4,.11,.02,.01,.65,.04,.44,.09,.12,.42,.89,.74,.01,.01,.06,.24,.09,.57,.06,.04,.37,.02,.73,.36,.74,.17,.81,0,.02,.01,.01,0,.02,.59,.94,.33,.99,.4,.14,.07,.52,.35,.29,.33,.84,.29,.79,.72,.89,0,.1,.27,.08,.02,.46,0,0,.32,.24,.47,.43,.12,.32,.07,.04,0,0,.34,.5,.12,.08,.33,.22,.62,.04,.49,.3,.11,0,.26,.98,.13,.83,.73,1,.97,.32,.8,.47,.02,.82,.17,.5,.7,.01,.78,.08,.02,.06,.18,.02,.98,.05,.4,.02,0,.04,.29,0,.9,.57,.26,.6,.55,.62,.02,.18,.41,.86,.31,.4,.3,.37,.09,.28,.57,0,.39,.25,.11,.01,.47,.56,.83,.25,.66,.08,.04,.28,.54,0,.01,.08,.04,.83,.53,.04,.69,.69,.37,.81,.18,.54,.43,.32,.36,.35,0,0,.79,.02,.04,.12,.7,.07,.92,.37,0,.13,.1,.96,.91,.1,.02,.03,.64,.8,.66,.02,.04,.06,.59,.06,.14,.17,.44,.02,.25,.98,.01,.24,.17,.22,.36,.3,.79,.13,.62,.14,0,.86,.27,.16,.83,.42,.95,.78,.24,.11,.07,.29,.82,.09,.15,.04,.89,.14,.01,.67,.01,.88,.08,.19,.79,.01,.58,.13,.88,.27,.19,.24,.87,.2,.79,.01,.14,.64,.98,.97,.73,.81,.01,.18,.2,.19,.65,.3,.37,.19,.4,.46,.18,.07,.38,.74,.57,0,0,.03,.73,.96,.08,.01,.01,.16,0,.24,.68,.17,.2,.44,.56,.81,.32,.8,.19,.27,0,.57,.12,.12,.05,.2,.02,.51,.96,.02,.07,.26,.73,.85,.22,.6,.01,.3,.52,.14,.67,.76,.09,.27,.31,.01,.04,.04,.14,.45,.25,0,.43,.54,.17,.11,.46,.26,.01,.83,.25,.02,.02,.01,.65,.69,.15,.76,.27,.06,.2,.24,.13,.01,.13,.02,.94,.02,.31,.88,.94,.03,.31,1,.01,.72,0,.39,0,0,.03,.06,.38,.01,.07,.67,.56,.04,.47,.44,.15,.87,.83,.03,.59,.05,0,0,.1,.06,.96,.54,.66,.29,.51,.22,.66,.01,.01,.26,.84,.6];export{a as pvalData};
